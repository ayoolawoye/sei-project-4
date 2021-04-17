from comments.serializers.common import CommentSerializer
from seller.serializers.common import SellerSerializer
from ..serializers.common import SkillSerializer


class PopulatedSkillSerializer(SkillSerializer):
    comments = CommentSerializer(many=True)
    seller = SellerSerializer(many=True)
