from comments.serializers.populated import PopulatedCommentSerializer
from seller.serializers.common import SellerSerializer
from ..serializers.common import SkillSerializer


class PopulatedSkillSerializer(SkillSerializer):
    comments = PopulatedCommentSerializer(many=True)
    seller = SellerSerializer(many=True)
