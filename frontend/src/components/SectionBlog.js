import React from 'react';

function SectionBlog() {
  const blogPosts = [
    {
      image: '/images/blog/blog-1.jpg',
      category: 'Relationship',
      date: '12 SEP',
      title: 'Mindfulness For Better Mental Health',
    },
    {
      image: '/images/blog/blog-2.jpg',
      category: 'Stress/Anxiety',
      date: '14 SEP',
      title: 'Self-Care for Emotional Well-being',
    },
    {
      image: '/images/blog/blog-3.jpg',
      category: 'Self Confidence/Self-Esteem',
      date: '16 SEP',
      title: 'Cognitive Behavioral Therapy for Stress',
    },
  ];

  return (
    <div className="section-blog tf-spacing-6" style={{ padding: '50px 0', backgroundColor: '#fff' }}>
      <div className="tf-container">
        <div className="heading-section text-center">
          <p
            className="text-2 sub"
            style={{
              color: 'var(--Primary)',
              fontSize: '12px',
              marginBottom: '10px',
              display: 'block',
              textTransform: 'uppercase',
              letterSpacing: '3px',
            }}
          >
            Healingy Blog & Resources
          </p>
          <h3
            style={{
              color: '#000',
              fontSize: '32px',
              marginBottom: '10px',
              display: 'block',
              fontWeight: 'bold',
            }}
          >
            Your go-to source for mental health insights, tools, and advice.
          </h3>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div className="col-lg-4 col-md-6" key={index} style={{ marginBottom: '30px' }}>
              <div className="article-blog-item">
                <div className="image-wrap">
                  <div className="date-label" style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    backgroundColor: 'var(--Primary)',
                    color: '#fff',
                    padding: '5px 10px',
                    borderRadius: '5px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}>
                    {post.date}
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    style={{ width: '100%', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <p
                    style={{
                      color: 'var(--Color-3)',
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '2px',
                      marginBottom: '5px',
                    }}
                  >
                    {post.category}
                  </p>
                  <h5
                    style={{ color: '#000', fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}
                  >
                    {post.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionBlog;