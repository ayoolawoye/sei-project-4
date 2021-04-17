from .common import SellerSerializer
from seller.serializers.common import SellerSerializer


class PopulatedSellerSerializer(SellerSerializer):

    sellers = SellerSerializer(many=True)
