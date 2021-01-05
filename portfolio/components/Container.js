import Footer from './Footer';
import DocHead from './Head';
import Main from './Main';

const Container = ({blogs}) => {
	return (
		<>
			<DocHead />
			<Main blogs={blogs}/>
			<Footer />
		</>
	);
};

export default Container;
