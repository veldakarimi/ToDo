from rest_framework import serializers

from .models import Card
from .models import List



class ListSerializer(serializers.ModelSerializer):
	"""docstring for Todo Serializer"""
	class Meta:
		model=List
		fields=('id', 'name',)


class CardSerializer(serializers.ModelSerializer):
	"""docstring for Todo Serializer"""
	class Meta:
		model=Card
		fields=('id','title','description','story_points','business_value', 'list',)	