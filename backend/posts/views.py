from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .models import Post
from .serializers import PostSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def list(self, request, *args, **kwargs):
        queryset = Post.objects.all().order_by('-created_datetime')
        serializer = PostSerializer(queryset, many=True)
        return Response({
            'count': queryset.count(),
            'next': None,
            'previous': None,
            'results': serializer.data
        })

    def create(self, request, *args, **kwargs):
        data = request.data.copy()

        ip = request.META.get('HTTP_X_FORWARDED_FOR')
        if ip:
            ip = ip.split(',')[0]
        else:
            ip = request.META.get('REMOTE_ADDR') or '0.0.0.0'

        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save(author_ip=ip)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def partial_update(self, request, *args, **kwargs):
        career = self.get_object()
        data = request.data
        if 'title' in data:
            career.title = data['title']
        if 'content' in data:
            career.content = data['content']
        career.save()
        serializer = self.get_serializer(career)
        return Response(serializer.data)

    def destroy(self, request, *args, **kwargs):
        career = self.get_object()
        career.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
