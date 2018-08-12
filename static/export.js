$(document).ready(function () {

	function exportTableToCSV($table, filename) {
    
        let $rows = $table.find('tr:has(td),tr:has(th)'),
        tmpColDelim = String.fromCharCode(11), 
        tmpRowDelim = String.fromCharCode(0), 
        colDelim = '","',
        rowDelim = '"\r\n"',
    
        csv = '"' + $rows.map(function (i, row) {
            let $row = $(row), $cols = $row.find('td,th');
    
                return $cols.map(function (j, col) {
                    let $col = $(col), text = $col.text();
                    return text.replace(/"/g, '""'); 
                }).get().join(tmpColDelim);

            }).get().join(tmpRowDelim)
                .split(tmpRowDelim).join(rowDelim)
                .split(tmpColDelim).join(colDelim) + '"',
                csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
            console.log(csv);
            //IE
        	if (window.navigator.msSaveBlob) { 
        		window.navigator.msSaveOrOpenBlob(new Blob([csv], {type: "text/plain;charset=utf-8;"}), "csvname.csv")
        	} 
        	else {
        		$(this).attr({ 'download': filename, 'href': csvData, 'target': '_blank' }); 
        	}
    }

    $("#export-btn").on('click', function (event) {	
        exportTableToCSV.apply(this, [$('#proj-table'), 'export.csv']);
    });

});