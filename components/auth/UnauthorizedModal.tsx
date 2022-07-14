import { useRouter } from "next/router";
import { FaWindowClose } from "react-icons/fa";
import Button from "../ui/buttons/Button";
import Modal from "../ui/modals/Modal";

const UnauthorizedModal: React.FC = () => {
	const router = useRouter();

	return (
		<Modal>
			<FaWindowClose
				onClick={() => {
					router.push("/");
				}}
				className="ml-auto mt-3 mr-3 cursor-pointer text-2xl text-primary hover:opacity-80"
			/>
			<h1 className="m-5 text-center text-3xl font-semibold text-primary">
				!אינך יכול לגשת לעמוד זה
			</h1>
			<div className="w-full text-center">
				<Button className="my-5" onClick={() => router.push("/")}>
					אישור
				</Button>
			</div>
		</Modal>
	);
};

export default UnauthorizedModal;
