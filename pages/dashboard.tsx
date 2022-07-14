import {
	GetServerSideProps,
	InferGetServerSidePropsType,
	NextPage,
} from "next";
import { useSession } from "next-auth/react";
import LoginModal from "../components/auth/LoginModal";
import UnauthorizedModal from "../components/auth/UnauthorizedModal";
import ActiveWindow from "../components/dashboard/ActiveWindow";
import Panel from "../components/dashboard/Panel";
import clientPromise from "../lib/mongodb";
import { DashboardContextProvider } from "../store/DashboardContext";

const Dashboard: NextPage<
	InferGetServerSidePropsType<typeof getServerSideProps>
> = ({ initialPrices }) => {
	const { data: session } = useSession();
	if (!session) {
		return <LoginModal />;
	}
	if (
		session.user &&
		session.user.email !== process.env.NEXT_PUBLIC_EMAIL_OF_ADMIN
	) {
		return <UnauthorizedModal />;
	}

	return (
		<DashboardContextProvider>
			<Panel />
			<ActiveWindow initialPrices={initialPrices} />
		</DashboardContextProvider>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const db = (await clientPromise).db();
		const initialPrices: any = await db.collection("prices").find().toArray();

		delete initialPrices[0]._id;

		return {
			props: {
				initialPrices: JSON.parse(JSON.stringify(initialPrices[0])),
			},
		};
	} catch (error: any) {
		throw new Error(error);
	}
};

Dashboard.displayName = "Dashboard";

export default Dashboard;
