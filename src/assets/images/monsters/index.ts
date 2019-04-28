import EclipseBirdImg from "./eclipse-bird.png";
import YithImg from "./yith.png";

export default function getMonsterImageById(id: string) {
	switch (id) {
		case 'monster/eclipse-bird':
			return EclipseBirdImg;
		case 'monster/yith':
			return YithImg;
		default:
			throw new Error(`monster image ${id} is not implemented`);
	}
}
