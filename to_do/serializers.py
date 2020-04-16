from rest_framework import serializers

from .models import Card
from .models import List


class CardSerializer(serializers.ModelSerializer):
	"""docstring for Todo Serializer"""

	class Meta:
		model=Card
		fields=('id','title','description','story_points','business_value', 'list',)	

class ListSerializer(serializers.ModelSerializer):
	"""docstring for Todo Serializer"""
	cards=CardSerializer(read_only=True, many=True)

	class Meta:
		model=List
		fields=('id', 'name', 'cards')


