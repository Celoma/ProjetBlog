export async function POST(request) {
    try {
      const blogResponse = await prisma.blog.findMany({
        orderBy: {
          likes: {
            count: 'desc',
          },
        },
        take: 3,
      });
  
      const sortedBlog = blogResponse.data.sort((a, b) => b.likes - a.likes);
  
      return new NextResponse(JSON.stringify(sortedBlog));
    } catch (error) {
      console.error('Error fetching sorted posts:', error);
      return new NextResponse(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
  