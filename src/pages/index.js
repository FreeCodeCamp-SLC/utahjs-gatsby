import React from "react";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import MainContent from '../components/MainContent';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="center-content">
			<MainContent />
		</div>
	</Layout>
)

export default IndexPage
