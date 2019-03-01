function startFigures(i,j,$obj,size) {
    //ладья
    if (j == 1 || j == size) {
        switch (i) {
            case 1:
                $obj.classList.add('bR');
                break;
            case size:
                $obj.classList.add('wR');
                break;
        }
            
    }
    //Конь
    if (j == 2 || j == (size - 1)) {
        switch (i) {
            case 1:
                $obj.classList.add('bN');
                break;
            case size:
                $obj.classList.add('wN');
                break;
        }
            
    }
    //Слон
    if (j == 3 || j == (size - 2)) {
        switch (i) {
            case 1:
                $obj.classList.add('bB');
                break;
            case size:
                $obj.classList.add('wB');
                break;
        }
            
    }
    //Ферзь
    if (j == 4 && i == 1) {
        $obj.classList.add('bQ');        
    }
    if (j == (size - 3) && i == size) {
        $obj.classList.add('wQ');        
    }
    //Король
    if (j == 5 && i == 1) {
        $obj.classList.add('bK');        
    }
    if (j == (size - 4) && i == size) {
        $obj.classList.add('wK');        
    }
    //Пешка
    if (i == 2) {
        $obj.classList.add('bP');        
    }
    if (i == size-1) {
        $obj.classList.add('wP');        
    }
}

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
                
                startFigures(i,j,$excel,size)
            }
            $field.appendChild($excel);
        }
    }
}

creatChessboard(8);