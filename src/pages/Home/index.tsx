import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import RoomsContent from "../../content/RoomsContent.json";
import Gallery from "../../components/Gallery";
import { Image } from "../../common/Image";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const Home = () => {
	return (
		<Container>
			<ScrollToTop />
			<ContentBlock
				direction="right"
				title={IntroContent.title}
				content={IntroContent.text}
				button={IntroContent.button}
				icon="angle_view.jpg"
				id="intro"
			/>
			<MiddleBlock
				title={MiddleBlockContent.title}
				content={MiddleBlockContent.text}
				button={MiddleBlockContent.button}
			/>
			<ContentBlock
				direction="left"
				title={AboutContent.title}
				content={AboutContent.text}
				section={AboutContent.section}
				images={AboutContent.images}
				id="about"
			/>
			<MiddleBlock
				title={RoomsContent.title}
				content={RoomsContent.content}
				button={RoomsContent.button}
			/>
			<Gallery>
				{
					RoomsContent.images.map((item: string, id: number) => {
						return (
							<Image src={item} width="100%" height="100%" />
						)
					})
				}
			</Gallery>
			<MiddleBlock
				title={ProductContent.title}
				content={ProductContent.content}
				button={ProductContent.button}
			/>
			{ProductContent.product.map(
				(
					item: {
						title: string;
						text: string;
            			direction: string;
						icon: string;
					},
					id: number
				) => {
					return (
						<ContentBlock
							direction={item.direction as "left" | "right"}
							title={item.title}
							content={item.text}
							icon={item.icon}
							id="intro"
						/>
					);
				}
			)}

			<Contact
				title={ContactContent.title}
				content={ContactContent.text}
				contacts={ContactContent.contacts}
				id="contact"
			/>
		</Container>
	);
};

export default Home;
