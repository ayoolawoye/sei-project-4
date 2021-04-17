from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers.populated import PopulatedSellerSerializer
from .models import Seller


class SellerListView(APIView):
    def get(self, _request):
        sellers = Seller.objects.all()
        serialized_sellers = PopulatedSellerSerializer(sellers, many=True)
        return Response(serialized_sellers.data, status=status.HTTP_200_OK)
