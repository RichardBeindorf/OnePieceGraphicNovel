import Image from "next/image";
import background from "./assets/frames/backdrop/Background1.png";

export default function Home() {
	return (
		<div>
			<div style={{ height: M }}>
				<Image src={background} alt="Backdrop made of colorfull lightbeams" />
			</div>
		</div>
	);
}
