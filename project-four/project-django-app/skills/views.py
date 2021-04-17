from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import NotFound

from .models import Skill
from .serializers.common import SkillSerializer
from .serializers.populated import PopulatedSkillSerializer


class SkillListView(APIView):
    def get(self, _request):
        skills = Skill.objects.all()
        serialized_skills = PopulatedSkillSerializer(skills, many=True)
        return Response(serialized_skills.data, status=status.HTTP_200_OK)

    def post(self, request):
        skill_to_add = SkillSerializer(data=request.data)
        if skill_to_add.is_valid():
            skill_to_add.save()
            return Response(skill_to_add.data, status=status.HTTP_201_CREATED)
        return Response(
            skill_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY
        )


class SkillDetailView(APIView):
    def get_skill(self, pk):
        try:
            return Skill.objects.get(pk=pk)
        except Skill.DoesNotExist:
            raise NotFound(detail="Cannot find that skill")

    def get(self, _request, pk):
        skill = self.get_skill(pk=pk)
        serialized_skill = PopulatedSkillSerializer(skill)
        return Response(serialized_skill.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        skill_to_delete = self.get_skill(pk=pk)
        skill_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        skill_to_edit = self.get_skill(pk=pk)
        updated_skill = SkillSerializer(skill_to_edit, data=request.data)
        if updated_skill.is_valid():
            updated_skill.save()
            return Response(updated_skill.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_skill.errors, status.HTTP_422_UNPROCESSABLE_ENTITY)
