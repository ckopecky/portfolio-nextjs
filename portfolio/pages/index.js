import Container from '../components/Container';
import axios from 'axios';

// The following import prevents a Font Awesome icon server-side rendering bug,
// where the icons flash from a very large icon down to a properly sized one:
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;  /* eslint-disable import/first */

export const getStaticProps = async (context) => {
  const blogs = await axios.get(process.env.NEXT_PUBLIC_ARTICLES);
  if(!blogs) {
    return {
	  blogs: null,
      notFound: true
    }
  }
  const filtered = blogs.data.filter(blog => blog.priority === true)
  return {
    props: {
	  blogs: filtered,
	  notFound: false
    },
  }
}

const Home = ({ blogs, notFound }) => {
	return (
		<div className='container'>
			<Container blogs={blogs}/>
			<style jsx>{`
				.container {
					min-height: 100vh;
					padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
						Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
						Helvetica Neue, sans-serif;
				}

				* {
					box-sizing: border-box;
        }
        a {
					color: inherit;
					text-decoration: none;
        }
        .logo {
					height: 1em;
				}

			`}</style>
		</div>
	);
};

export default Home;
