from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Skill
from .serializers.common import SkillSerializer


class SkillListView(APIView):
    def get(self, _request):
        skills = Skill.objects.all()
        serialized_skills = SkillSerializer(skills, many=True)
        return Response(serialized_skills.data, status=status.HTTP_200_OK)