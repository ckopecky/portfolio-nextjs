import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Main = ({blogs}) => {
  
    return (      
      <main className="container">
        <h1 id="blogs">Featured Blogs by Christina Kopecky</h1>
        <div className="blogs-container">
          {blogs.map(blog => {
            return (
              <a key={blog.id} href={blog.link} target="_blank" rel="noopenner noreferrer">
                <img src={blog.picture} width="300"/>
                <div className="blog-body">
                  <h2 className="blog-title">{blog.title}</h2>
                  <a className="read-more" href={blog.link}>Read More&nbsp;&nbsp;<FontAwesomeIcon size="sm" id="icon" icon={faExternalLinkAlt} /></a>
                </div>
              </a>
            )
            
          })}
        </div>
        <style jsx>{`
          .container {
            width: 90%;
            display: flex;
            flex-direction: column;
            background-color: lightblue;
            border-radius: 30px;
            margin: 20px auto;
            padding: 20px 30px;
          }

          h1 {
            padding-left: 25px;
            font-weight: bolder;
            width: 100%;
            font-variant: small-caps;
            font-size: 3rem;
            text-align: left;
          }

          .blogs-container {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
          }

          .blogs-container > a {
            width: 30%;
            background: lightgrey;
            margin: 20px;
            border-radius: 20px;
            border: 1px solid black;
          }

          img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 20px 20px 0px 0px;
          }

          .blog-body {
            display: flex;
            flex-direction: column;
            width: 100%;
            min-height: 100px;
            height: 100%;
            border-radius: 0px 0px 20px 20px;
          }

          .blog-title {
            font-weight: bold;
            font-size: 1.3rem;
            margin: 20px 20px 0px 20px;
            min-height: 50px;
            display: flex;
            align-items: center;
          }

          .read-more {
            width: 100%;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding: 20px;
          }

          @media screen and (max-width: 900px) {
            .container {
              flex-direction: column;
            }
            h1 {
              padding-left: 0px;
              text-align: center;
            }
            .blogs-container {
              flex-direction: column;
            }
            .blogs-container a {
              width: 80%;
            }

            #read-more {
              display: flex;
              justify-content: flex-end;
              text-align: right;
              background: purple;
            }
          }
        
        `}

        </style>
      </main>
    );
};

export default  Main;