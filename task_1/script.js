function startFigures(i,j,$obj,bF,wF) {
    if (i == 1) $obj.classList.add(bFigures.shift());
    if (i == 8) $obj.classList.add(wFigures.shift());
    if (i == 2) $obj.classList.add('bP');
    if (i == 7) $obj.classList.add('wP');
}

function creatChessboard(size) {
    bFigures = ['bR','bN','bB','bQ','bK','bB','bN','bR'];
    wFigures = ['wR','wN','wB','wK','wQ','wB','wN','wR'];
    
    var $field = document.createElement('div');
    document.body.appendChild($field);
    $field.classList.add('field');

    for (var i = 0; i <= size + 1; i++) {
        for (var j = 0; j <= size + 1; j++) {
            var $excel = document.createElement('div');
            if (i == 0 || i == size + 1) {
                $excel.classList.add('nav');
                if (j > 0 && j <= size) {
                    $excel.textContent = String.fromCharCode(j+65);
                }
            } else if (j == 0 || j == size + 1) {
                $excel.classList.add('nav');
                if (i > 0 && i <= size) {
                    $excel.textContent = i;
                }
            } else {
                if ((i + j) % 2 == 0)    {
                    $excel.classList.add('excelWhite');
                } else {
                    $excel.classList.add('excelBlack');
                }
                $excel.setAttribute('posX', i);
                $excel.setAttribute('posY', String.fromCharCode(j+65));
                
                startFigures(i,j,$excel,bFigures,wFigures)
            }
            $field.appendChild($excel);
        }
    }
}

creatChessboard(8);