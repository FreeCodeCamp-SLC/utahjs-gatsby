import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

const RelatedMeetups = () => {
	const data = useStaticQuery(graphql`
		query {
			angular: file(relativePath: { eq: "sisters/angularjs.png" }) {
				childImageSharp {
					fixed(height: 90, width: 90) {
						...GatsbyImageSharpFixed
					}
				}
			},
			lunchJs: file(relativePath: { eq: "sisters/lunchjs.jpg" }) {
				childImageSharp {
					fixed(height: 90, width: 90) {
						...GatsbyImageSharpFixed
					}
				}
			},
			nodeJs: file(relativePath: { eq: "sisters/nodejs.png" }) {
				childImageSharp {
					fixed(height: 90, width: 70) {
						...GatsbyImageSharpFixed
					}
				}
			},
			reactJs: file(relativePath: { eq: "sisters/reactjs.png" }) {
				childImageSharp {
					fixed(height: 90, width: 90) {
						...GatsbyImageSharpFixed
					}
				}
			},
			emberJs: file(relativePath: { eq: "sisters/emberjs.png" }) {
				childImageSharp {
					fixed(height: 90, width: 60) {
						...GatsbyImageSharpFixed
					}
				}
			},
			ionicUtah: file(relativePath: { eq: "sisters/ionic.jpg" }) {
				childImageSharp {
					fixed(height: 90, width: 90) {
						...GatsbyImageSharpFixed
					}
				}
			},
			vueJs: file(relativePath: { eq: "sisters/vuejs.jpg" }) {
				childImageSharp {
					fixed(height: 90, width: 90) {
						...GatsbyImageSharpFixed
					}
				}
			},
			downtownCoding: file(relativePath: { eq: "sisters/downtown-coding.jpg" }) {
				childImageSharp {
					fixed(height: 58, width: 90) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`)

	return (
		<section>
			<h2 id="Meetups">Other Web Technology Meetups in Utah</h2>
			<div className="sisters">
				<a href="https://www.meetup.com/AngularJS-Utah/" target="_blank" rel="noreferrer" className="sister">
					<Img className="sister-img" backgroundColor="white" fixed={data.angular.childImageSharp.fixed} alt="" />
					<span className="sister-name">Angular</span>
				</a>
				<a href="https://www.meetup.com/lunch-js/" target="_blank" rel="noreferrer" className="sister">
					<Img className="sister-img" fixed={data.lunchJs.childImageSharp.fixed} alt="" />
					<span className="sister-name">Lunch.JS</span>
				</a>
				<a href="https://www.meetup.com/utahnodejs/" target="_blank" rel="noreferrer" className="sister">
					<Img className="sister-img" imgStyle={{ filter: 'brightness(1.2)' }} fixed={data.nodeJs.childImageSharp.fixed} alt="utah node" />
					<span className="sister-name">Node.js SLC</span>
				</a>
			</div>
			<div className="sisters">
				<a href="https://www.meetup.com/ReactJS-Utah/" target="_blank" rel="noreferrer" className="sister">
					<Img className="sister-img" imgStyle={{ filter: 'brightness(0.6)' }} fixed={data.reactJs.childImageSharp.fixed} alt="react JS" />
					<span className="sister-name">ReactJS</span>
				</a>
				<a href="https://www.meetup.com/EmberJS-SLC/" target="_blank" rel="noreferrer" className="sister">
					<Img className="sister-img" fixed={data.emberJs.childImageSharp.fixed} alt="" />
					<span className="sister-name">Ember.JS</span>
				</a>
				<a href="https://www.meetup.com/Ionic-Utah/" target="_blank" rel="noreferrer" className="sister">
					<Img className="sister-img" fixed={data.ionicUtah.childImageSharp.fixed} alt="" />
					<span className="sister-name">Ionic</span>
				</a>
			</div>
			<div className="sisters">
				<a href="https://www.meetup.com/utah-vue/" target="_blank" rel="noreferrer" className="sister">
					<Img className="sister-img" fixed={data.vueJs.childImageSharp.fixed} alt="" />
					<span className="sister-name">Vue.js</span>
				</a>
				<a href="https://www.meetup.com/DowntownCodingSLC/" target="_blank" rel="noreferrer" className="sister">
					<Img className="sister-img" fixed={data.downtownCoding.childImageSharp.fixed} alt="" />
					<span className="sister-name">Downtown Coding</span>
				</a>
			</div>
		</section>
	);
}

export default RelatedMeetups;