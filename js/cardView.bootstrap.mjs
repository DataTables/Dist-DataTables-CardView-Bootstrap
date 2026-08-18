/*! CardView Bootstrap 3 styling 1.0.2 for DataTables
 * Copyright (c) SpryMedia Ltd - https://datatables.net/license/plus
 */

import DataTable from 'datatables.net-bs';
import CardView from 'datatables.net-cardview';


Object.assign(DataTable.CardView.classes, {
	card: 'panel panel-default dtcv-card',
	cardContent: 'panel-body'
});

export default DataTable;

