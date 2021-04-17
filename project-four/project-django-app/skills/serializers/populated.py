from comments.serializers.common import CommentSerializer
from ..serializers.common import SkillSerializer


class PopulatedSkillSerializer(SkillSerializer):
    comments = CommentSerializer(many=True)
