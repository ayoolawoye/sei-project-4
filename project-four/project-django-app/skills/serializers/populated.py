from comments.serializers.populated import PopulatedCommentSerializer
from seller.serializers.common import SellerSerializer
from jwt_auth.serializers.common import UserSerializer
from ..serializers.common import SkillSerializer


class PopulatedSkillSerializer(SkillSerializer):
    comments = PopulatedCommentSerializer(many=True)
    owner = UserSerializer()
