import Layout from '@/layout/layout/Layout';

import Shipments from '@/screens/shipments/Shipments';
import { Source } from '@/services/tracking.service';

export default function AvalablePage() {
	return (
		<Layout>
			<Shipments category={Source.Available} />
		</Layout>
	);
}
