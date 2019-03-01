function creatChessboard(size) {
    var nameCol = ['A','B','C','D','E','F','G','H'];
    
    var $field = document.createElement('div');
    document.body.appendChild($field);
    $field.classList.add('field');

    for (var i = 0; i <= size + 1; i++) {
        for (var j = 0; j <= size + 1; j++) {
            var $excel = document.createElement('div');
            if (i == 0 || i == size + 1) {
                $excel.classList.add('nav');
                if (j > 0 && j <= size) {
                    $excel.textContent = nameCol[size - j];
                }
            } else if (j == 0 || j == size + 1) {
                $excel.classList.add('nav');
                if (i > 0 && i <= size) {
                    $excel.textContent = i;
                }
            } else {
                if ((i + j) % 2 == 0) {
                    $excel.classList.add('excelWhite');
                } else {
                    $excel.classList.add('excelBlack');
                }
                $excel.setAttribute('posX', i);
                $excel.setAttribute('posY', nameCol[size - j]);
            }
            $field.appendChild($excel);
        }
    }
}

creatChessboard(8);