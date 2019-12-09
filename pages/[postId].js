import React from "react";
import fetch from "isomorphic-unfetch";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

const BlogPost = ({ post }) => (
  <div className="container">
    <Head>
      <title>Ana Sayfa</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,700,900&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      <nav class="navbar navbar-full navbar-light bg-light sticky-top eztt" >
      <a class="navbar-brand" href="#"><font color="#16A662" face="Poppins"><b>ozgurefe.com</b></font></a>

</nav>
    </Head> 

    <div className="hero">
      <h1 className="hero-title">Özgür Efe</h1>
      <div className="hero-social-links">
        <Link href="https://github.com/ozgurefeofficial">
          <a className="social-link">Github</a>
        </Link>
        <Link href="https://www.twitter.com/realozgurefe">
          <a className="social-link">Twitter</a>
        </Link>
        <Link href="https://www.linkedin.com/in/%C3%B6zg%C3%BCr-efe-y%C4%B1lanc%C4%B1-2ba431199/">
          <a className="social-link">LinkedIn</a>
        </Link>
        <Link href="https://www.instagram.com/ozgurefe.jpeg">
          <a className="social-link">Instagram</a>
        </Link>
      </div>
    </div>

    <div className="blog">
      <h2 className="blog-title">
        <Link href="/test">
          <a className="blog-title-link">{post.title}</a>
        </Link>
      </h2>
      <div className="blog-text">
        <ReactMarkdown source={post.details} />
      </div>
      <div className="blog-date">{post.date}<hr></hr></div>
    </div>
    <style jsx>{`
      .blog-title {
        font-family: Poppins;
        font-weight: bold;
        color: #0D663D;
      }
      .navbar {
        font-family: Poppins;
      }
      .blog-text {
        font-family: Poppins;
      }
      .container {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
      }
      
      .hero {
        text-align: center;
        margin: 96px 0;
      }

      .social-link {
        margin-right: 8px;
      }
      .eztt {
        font-family: Poppins;
        font-weight: bold;
        color: #16A662;
      }
      .hero-title {
        font-size: 48px;
        font-family: Poppins;
        font-weight: bold;
        color: #16A662;
      }

      .blog-date {
        text-align: right;
        color: #cccccc;
        margin: 12px 0 48px 0;
        font-family: Poppins;
      }

      a {
        color: #1EE688;
        text-decoration: none;
      }
    `}</style>
  </div>
);

BlogPost.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const res = await fetch(`http://localhost:3000/api/post/${query.postId}`);
  const json = await res.json();
  return { post: json.post };
};

export default BlogPost;
