// This is remake my first game in 1988 on pdp11 - sp21. AlexS(aka astoa) 
var maps = [
//Координаты по X
//000000001111111111222222222233333333334444444444555555555566666666667777777777 - 0..79 
//234567890123456789012345678901234567890123456789012345678901234567890123456789 
{sizeX: 80, sizeY: 24,  boardImages: "\
+-----------------------------------------------------------------------------+ \
! .  .  .  .  .  .  .  .  .  .  .   . ! ! .   .  .  .  .  .  .  .  .  .  .  . ! \
! . +-------+ . +-----------------+ . ! ! . +-----------------+ . +-------+ . ! \
! @ !       ! . !                 ! . ! ! . !                 ! . !       ! @ ! \
! . +-------+ . +-----------------+ . +-+ . +-----------------+ . +-------+ . ! \
! .  .  .  .  .  .  .  .  .  .  .   .  .  .   .  .  .  .  .  .  .  .  .  .  . ! \
! . +-------+ . +-------+ . +---------------------+ . +-------+ . +-------+ . ! \
! . !       ! . !       ! .  .  .   . ! ! .   .  .  . !       ! . !       ! . ! \
! . !       ! . !       +---------+ . +-+ . +---------+       ! . +-------+ . ! \
! . +-------+ . !             !                 !             ! .  .  .  .  . ! \
! .  .  .  .  . !             !   +--+ + +--+   +-------------+ . +-----------+-\
+-----------+ . +-------------+   !         !                   .               \
              .                   !         !   +-------------+ . +-----------+-\
+-----------+ . +-------------+   +---------+   !             ! .  .  . +-----! \
! .  .  .  .  . !             !                 !             ! . +-+ .  .  . ! \
! . +-------+ . +-------------+   ===========   +-------------+ . ! !-----+ . ! \
! @  .  . ! ! .  .  .  .  .  .  .   .     .   .  .  .  .  .  .  . ! ! .  .  @ ! \
!-----+ . +-+ . +-------+ . +---------------------+ . +-------+ . +-+ . +-----! \
! .  .  .  .  . !       ! . !                     ! . !       ! .  .  .  .  . ! \
! . +-----------+       ! . +---------! !---------+ . !       +-----------+ . ! \
! . !                   ! .  .  .   . ! ! .   .  .  . !                   ! . ! \
! . +-----------------------------+ . +-+ . +-----------------------------+ . ! \
! .  .  .  .  .  .  .  .  .  .  .   .  .  .   .  .  .  .  .  .  .  .  .  .  . ! \
+-----------------------------------------------------------------------------+ "},
{sizeX: 80, sizeY: 24, boardImages: "\
+-----------------------------------------------------------------------------+ \
! .  .  .  .  .  .  .  .  .  .  .   .  .  .   .  .  . ! ! .  .  .  .  .  .  . ! \
! . +-+ . +-----------------------+ . +-+ . +-----+ . +-+ . +-+ . +-------+ . ! \
! . ! ! . !                       ! .  .  . !     ! .  .  . ! ! . !       ! . ! \
! . +-+ . +-----------------+     +---------+     +--+ . +--+ ! . +-------+ . ! \
! @  .  .  .  .  .  .  .  . !                        ! . !    ! .  .  .  .  . ! \
! . +-+ . +-------------+ . +---------+ +------------+ . +--+ !-----+ . +-+ . ! \
! . ! ! .  .  .  .  . ! ! .  .  .   . ! ! .   .  .  .  .  . ! ! .  .  . ! ! . ! \
! . ! +-----------+ . ! +---------+ . +-+ . +-----------+ . ! ! . +-------+ . ! \
! . +-------------+ . !       !                 !       ! . ! ! @  .  .  .  . ! \
! .  .  .  .  .  .  . !       !   +--+ + +--+   +-------+ . +-------------+ . +-\
+-----------------+ . +-------+   !         !             .                     \
                    .             !         !   +-------+ . +-----------------+-\
+ . +-------------+ . +-------+   +---------+   !       ! .  .  .  .  .  .  . ! \
! .  .  .  .  @ ! ! . !       !                 !       ! . +-------------+ . ! \
! . +-------+ . ! ! . +-------+   ===========   +-----+ ! . +-----------+ ! . ! \
! . ! ! .  .  . ! ! .  .  .  .  .   .     .   .  .  . ! ! .  .  .  .  . ! ! . ! \
! . +-+ . +-----! +--+ . +------------------------+ . +-------------+ . +-+ . ! \
! .  .  .  .  . !    ! . !                        ! .  .  .  .  .  .  .  .  @ ! \
! . +-------+ . ! +--+ . +--+     +---------+     +-----------------+ . +-+ . ! \
! . !       ! . ! ! .  .  . !     ! .  .  . !                       ! . ! ! . ! \
! . +-------+ . +-+ . +-+ . +-----+ . +-+ . +-----------------------+ . +-+ . ! \
! .  .  .  .  .  .  . ! ! .  .  .   .  .  .   .  .  .  .  .  .  .  .  .  .  . ! \
+-----------------------------------------------------------------------------+ "},
{sizeX: 80, sizeY: 24, boardImages: "\
+-----------------------------------------------------------------------------+ \
! .  .  .  .  .  .  .  .  .  .  .   . ! ! .   .  .  .  .  .  .  .  .  .  .  . ! \
! . +-+ . +-+ . +-----------------+ . ! ! . +-----+ . +-------+ . +-------+ . ! \
! @ ! ! . ! ! . !                 ! . ! ! . !     ! . !       ! . !       ! @ ! \
! . +-+ . +-+ . +-----------------+ . +-+ . +-----+ . +-------+ . +-------+ . ! \
! .  .  .  .  .  .  .  .  .  .  .   .  .  .   .  .  .  .  .  .  .  .  .  .  . ! \
! . +-------+ . +---------------------------------+ . +---+ . +-----------+ . ! \
! .  .  .  .  . ! .  .  . .  .  .   . ! ! .   .  .  . !   ! . ! .  .  . . ! . ! \
! . +-------+ . ! . +-------------+ . +-+ . +---------+---+ . ! . +---+ . + . ! \
! . +-------+ . ! . ! . . . . !                  .  .  .  . . ! .  .  .  .  . ! \
! .  .  .  .  . ! .   . +-+ . !   +--+ + +--+   +-------------+ . +-----------+-\
+-----------+ . +-------+-+ . !   !         !                   .               \
                            . !   !         !   +-------+-+ . + . +-----------+-\
+-------+   +-------------+ . !   +---------+   ! . . . +-+ . ! .  .  . +-----! \
! .  .  .  .  . !   .  .  . . !                 ! . + .   . . ! . +-+ .  .  . ! \
! . +-------+ . +-------------+   ===========   + . +---------+ . ! !-----+ . ! \
! @  .  . ! ! .  .  .  .  .  .  .   .     .   .  .  .  .  .  .  . ! ! .  .  @ ! \
!-----+ . +-+ . +-------+ . +---------------------+ . +---+ . +---+-+ . +-----! \
! .  .  .  .  . !       ! . !                     ! . !   ! . ! .  .  .  .  . ! \
! . +-------+ . +-------+ . +---------! !---------+ . !   ! . +-----------+ . ! \
! . !       ! .  .  .  .  .  .  .   . ! ! .   .  .  . !   ! .   .  .  .  .  . ! \
! . +-------+ . +-----------------+ . +-+ . +-------------+---------------+ . ! \
! .  .  .  .  .  .  .  .  .  .  .   .  .  .   .  .  .  .  .  .  .  .  .  .  . ! \
+-----------------------------------------------------------------------------+ "}
]
var game = {currentboard:0, board:[], sizeX:0, sizeY:0, countX:39, countY:18, count:0, stageX:25, stageY:3, stage:0, tick:100, timerId: null, time:0.0, health:3, nextpay:0}
    // currentboard - номер текущего игрового поля, в принципе необязательно т.к. рассчитывается как   (stage-1) % колличество образов полей
    // board - двумераный массив 2х2 из строкового образа игрового поля
    // sizeX,sizeY - размер игрового поля
    // countX, countY, count - счет и его коорлинаты вывода
    // stageX, stageY, stage - уровень и его координаты вывода
    // tick - время между вызовами таймера в мс. По хорошему нужно сделать каждому юниту отдельную функцию
    // timerId - идентификатор таймера.
    // hp - hit point
var units = [
    // userControl - управляется чеорвеком или нет
    // stage - определяет состояние юнита, обычный режим или нет
    // startposX/Y - стартовые позиции юнита (нужно перенести в карту)
    // posX/Y - текущие позиции
    // dx/y - команда направления движение, начинает действовать с появлением возможности двигаться в этом направлении
    // cdx/y - текущая команда направления движения
    {userControl: true,  state: 0, stateTime:0, stateDelay:10, image: [['<','-','>'], ['-','-','-']], startposX: 38, startposY: 16, posX: 0, posY:0, dx: 0, dy: 0, cdx: 0, cdy: 0},
    {userControl: false, state: 0, stateTime:0, stateDelay:10, image: [['=','O','='], ['<','$','>'], ['-','-','-']], startposX: 36, startposY: 11, posX: 0, posY:0, dx: 0, dy: 0, cdx: 0, cdy: 0},
    {userControl: false, state: 0, stateTime:0, stateDelay:10, image: [['=','O','='], ['<','$','>'], ['-','-','-']], startposX: 40, startposY: 11, posX: 0, posY:0, dx: 0, dy: 0, cdx: 0, cdy: 0},
    {userControl: false, state: 0, stateTime:0, stateDelay:10, image: [['=','O','='], ['<','$','>'], ['-','-','-']], startposX: 36, startposY: 12, posX: 0, posY:0, dx: 0, dy: 0, cdx: 0, cdy: 0},
    {userControl: false, state: 0, stateTime:0, stateDelay:10, image: [['=','O','='], ['<','$','>'], ['-','-','-']], startposX: 40, startposY: 12, posX: 0, posY:0, dx: 0, dy: 0, cdx: 0, cdy: 0}]

// ставим метку для игрового поля - можно разместить в любом окне.
document.write("<div id=\"stage\" style=\"font-family: monospace; white-space: pre\"></div>");
// стартовые значения
game.count = 0;
game.time = 0;
game.health = 3;
game.tick = 100;
game.nextpay = 1;
// инициализация уровня
initLevel(1);	// стартовый уровень 1. Если предыдущий == 0 значит рестарт игры

function initLevel(nextstage)
{
// общая инициализация
    if(game.stage == nextstage) {	// перезапуск уровня 
        game.time = 0;
        var html = "<table id='idBoard' style='font-family: monospace; white-space: pre'>";
        for(i = 0; i < game.sizeY; i++) {	// формируем игровое поле в виде таблицы уникальных id  x..y.. 
            html += '<tr>';
            for(j = 0; j < game.sizeX; j++) {
                html += "<td id=x"+j+"-y"+i+">"+game.board[i * game.sizeX + j]+"</td>";
            }
            html += '</tr>';
        }
        document.getElementById("stage").innerHTML = html;
        // Первичная инициализация, стартовые координаты юнитов уровня в перспективе можно перенести в стартовые структуры карты
        for(u = 0; u < units.length; u++) {
            units[u].posX = units[u].startposX
            units[u].posY = units[u].startposY
            units[u].dx = units[u].dy = units[u].cdx = units[u].cdy = 0;
            units[u].state = units[u].stateTime = 0;
        }
        // шаг игры
        game.timeId = setInterval(boardUpdate,game.tick);
        console.log("Stage =",game.stage,". Board =", game.currentBoard);
    }
    else {	// полная реинициализация
        game.stage = nextstage;
        game.currentBoard = (nextstage-1) % maps.length;
        game.tick = game.tick - game.stage	// каждый уровень скорость увеличивается на столько мс каков уровень
        console.log('Tick:',game.tick);
        game.time = 0;
        game.sizeX = maps[game.currentBoard].sizeX;
        game.sizeY = maps[game.currentBoard].sizeY;
        game.board = maps[game.currentBoard].boardImages.split('');
        //подготовка игрового поля
        var html = "<table id='idBoard' style='font-family: monospace; white-space: pre'>";
        for(i = 0; i < game.sizeY; i++) {	// формируем игровое поле в виде таблицы уникальных id  x..y.. 
            html += '<tr>';
            for(j = 0; j < game.sizeX; j++) {
                html += "<td id=x"+j+"-y"+i+">"+game.board[i * game.sizeX + j]+"</td>";
            }
            html += '</tr>';
        }
        document.getElementById("stage").innerHTML = html;

        // Первичная инициализация, стартовые координаты юнитов уровня в перспективе можно перенести в стартовые структуры карты
        for(u = 0; u < units.length; u++) {
            units[u].posX = units[u].startposX
            units[u].posY = units[u].startposY
            units[u].dx = units[u].dy = units[u].cdx = units[u].cdy = 0;
            units[u].state = units[u].stateTime = 0;
        }
        // шаг игры
        game.timeId = setInterval(boardUpdate,game.tick);
        console.log("Stage =",game.stage,". Board =", game.currentBoard);

        // рисуем уровень
        let strStage = ('Stage:'+game.stage.toString()).split('');
        xx = game.stageX - Math.floor(strStage.length/2);
        yy = game.stageY;
        for(i = 0; i < strStage.length; i++) {
            id = "x"+(xx+i)+"-y"+yy;
            document.getElementById(id).innerHTML = strStage[i]; // восстанавливаем старое значение поля
        }
    }
}

function isHome(u) 	// проверка для бота нахождения в простарнстве бокса.
{
    if((units[u].posX >= 35) && (units[u].posX <= 43) && (units[u].posY >= 11) && (units[u].posY <= 12)) { // если юнит в боксе 
        return true;
    }
    else {
        return false;
    }
}

function isEnd()	// проверка окончания уровня - не осталось лута: '.' или '@'
{
    for(let i = 0; i < (game.sizeX * game.sizeY); i++) { // очищаем место под образом
        if((game.board[i] == '.') || (game.board[i] == '@')) {
            return false;
        }
    }
    return true;
}

function unitMove(u,newposX, newposY)	// универсальная функция для всех юнитов
{
    let xx,yy,id;
    for(let i = 0; i < units[u].image[0].length; i++) { // очищаем место под образом
        xx = units[u].posX+i;
        yy = units[u].posY;
        if(xx >= game.sizeX) {
            xx = xx - game.sizeX;
            yy = yy + 1;
        }
        if(xx < 0) {
            xx = xx + game.sizeX;
            yy = yy - 1;
        }
        id = "x"+xx+"-y"+yy;
        // только для управляемого юнита - проверка взаимодействия с объектами поля
        if(units[u].userControl == true) {      // анализ места для управляемого юнита 
            if(game.board[yy * game.sizeX + xx] == '.') { // пересчитываем бонусы за '.'
                game.count += 1 * game.stage;
                game.board[yy * game.sizeX + xx] = ' ';
            }
            if(game.board[yy * game.sizeX + xx] == '@') { // пересчитываем бонусы за '.'
                game.count += 10 * game.stage;
                game.board[yy * game.sizeX + xx] = ' ';
                for(let j = 0; j < units.length; j++) { // всем ботам назначается состояние убегать если они были в состоянии атаки
                    if((units[j].userControl == false) && (units[j].state == 0) && !isHome(j)) {
                        console.log(j,units[j].state,"change state 1");
                        units[j].state = 1;
                        units[j].stateTime = game.time;
                    }
                }
            }
        }
        else { // для ботов - взаимодействие с юнитом игрока. Если текущее положение пересекается или будущее положение пересекается то имело место пересечение координат, по оси Y полное совпадение, по оси X на размер юнита
               // это сделано из того что был с артефакт встречного движение - юниты просто менялись местами и продолжали движение.
            if((((newposX >= (units[0].posX - 2)) && (newposX < (units[0].posX + 3))) && (newposY == units[0].posY)) || (((units[u].posX >= (units[0].posX - 2)) && (units[u].posX < (units[0].posX + 3))) && (units[u].posY == units[0].posY))) { 
                if(units[u].state == 0) { // проигрыш игрока
                    units[0].state = 1;
                }
                if(units[u].state == 1) { // бонус за бота, двойное не возможно т.к. очки счичаются только за переход бота 1 -> 2
                    units[u].state = 2;
                    console.log(u,"change state 2");
                    game.count += 100 * game.stage;
                }
            }
        }
        document.getElementById(id).innerHTML = game.board[yy * game.sizeX + xx]; // восстанавливаем старое значение поля
    }
    for(i = 0; i < units[u].image[0].length; i++) { // перерисовываем образ
        xx = newposX+i;
        yy = newposY;
        if(xx >= game.sizeX) {
            xx = xx - game.sizeX;
            yy = yy + 1;
        }
        if(xx < 0) {
            xx = xx + game.sizeX;
            yy = yy - 1;
        }
        id = "x"+xx+"-y"+yy;
//        console.log(u,units[u].state);
        document.getElementById(id).innerHTML = units[u].image[units[u].state][i];
    }
    units[u].posX = newposX; // сохраняем координаты в новой позиции для X
    units[u].posY = newposY; // сохраняем координаты в новой позиции для Y
    if(units[u].posX >= game.sizeX) {
        units[u].posX = units[u].posX - game.sizeX;
        units[u].posY = units[u].posY + 1; // новая возможная координата Y с учетом смены направления движения
    }
    if(units[u].posX < 0) {
        units[u].posX = units[u].posX + game.sizeX;
        units[u].posY = units[u].posY - 1;
    }
    // пересчет хиткаунтов
    if(100*2**game.nextpay < game.count) {
        game.nextpay++;
        game.health++;
    }
    // рисуем счет
    let strCount = ('count:' + game.count.toString() + " health:" + game.health.toString()).split('');
    xx = game.countX - Math.floor(strCount.length/2);
    yy = game.countY;
    for(i = 0; i < strCount.length; i++) {
        id = "x"+(xx+i)+"-y"+yy;
        document.getElementById(id).innerHTML = strCount[i]; // восстанавливаем старое значение поля
    }
}

function checkDirect(stepX, stepY) {	// функция для всекх юнитов - проверка возможности движения в указанном направлении
    let newposX = units[u].posX + stepX; // новая возможная координата X с учетом возможной смены направления движения
    let newposY = units[u].posY + stepY; // новая возможная координата Y с учетом возможной смены направления движения
    let a = game.board[(newposY) * game.sizeX + (newposX)];
    let b = game.board[(newposY) * game.sizeX + (newposX+1)];
    let c = game.board[(newposY) * game.sizeX + (newposX+2)];
    // сначала проверяем возможность смены направления движения. Проверка по трем символам abc - размерность игрового юнита - можно переписать сделав под любой размер
    // любой юнит может двигатьсь если перед ним ' ' или '.' или '@'.
    if(((a == ' ') || (a == '.') || (a == '@')) && ((b == ' ') || (b == '.') || (b == '@')) && ((c == ' ') || (c == '.') || (c == '@'))) { // проверка препятствия
        return true;
    }
    else {
        if((b == '+') && (units[u].userControl == false) && (newposX == 38) && (newposY == 10)) { // проверка препятствия бота для входа в загон и выхода
            return true;
        }
        else {
            return false;
        }
    }
}

function botControl(u) {	// функция управления ботами
    // алгоритм управленяи ботами: бот не должен останавливаться.
    // дельта это дистанция по X и Y до назначенной точки, которой может быть: юнит игрока (и в режиме атака и в режиме отступления), бокс с случае движения на восстановление
    let deltaX = 0;
    let deltaY = 0;
    let variant = [];
    let cost = 0;
    let nDir = [];
    // расчет дельты движения
    if(isHome(u)) {
        units[u].state = 0;    // бот в боксе восстанавливается из любого состояния
        if(game.time < 3) {    // первые 3 секунд направление рандомное - фора игроку, в качестве цули - случайная точка на карте.
            deltaX = Math.floor(Math.random() * 80) - units[u].posX;
            deltaY = Math.floor(Math.random() * 24) - units[u].posY;
        }
        else {
            deltaX = 38 - units[u].posX; // x39y9 - точка выхода
            deltaY = 9 - units[u].posY;
        }
    }
    else { // если юнит вне бокса
        if(units[u].state == 2 ) { // режим отступления в бокс
            deltaX = 39 - units[u].posX;	// дистанция до бокса
            deltaY = 11 - units[u].posY;
        }
        else {	// здесь основной алгоритм вычисления дельты, собственно интеллект ботов
            kc = 1.0 - (game.time/(300.0/game.stage)) % 1;		// коэффициент периодичности. от 1 до 0 в течении 300 секунд
            kr = Math.random() - 0.5;		// коэффициент случайности. -0.5 до +0.5
//            console.log("Kc:",kc,"Kr:",kr);
            deltaX = (units[0].posX + game.sizeX * kr * kc) - units[u].posX; // координата игрока к которой стремятмя боты случано смещается (+-) в пределах определенного радиуса
            deltaY = (units[0].posY + game.sizeY * kr * kc) - units[u].posY; // значение которого зависит от времени от начала раунда но не более половины размеры поля
            // проверяем это режим атаки или отступления
            if(units[u].state == 1) {	// если режим убегания
                deltaX = -deltaX;	// инвертируем дистанцию
                deltaY = -deltaY;
            }
        }
    }
    // проверяем все возможные направления движения. Проверяем все кроме обратного, реверс делать нельзя.
    // 
    if(units[u].cdx == 0) { // если существующее движение по оси Y. Проверяем направо, налево и в том же направлении
        units[u].dx = 1; // смена направления в '+' по X
        units[u].dy = 0;
        if(checkDirect(units[u].dx,units[u].dy) == true) { // проверяем возможно ли движение в направлении + по X
            cost = 1;                                      // если двигаться можно ставим минимальный cost
            if(deltaX > 0) {  // проверяемое направление совпадает с направлением на выбранную точку: юнит игрока, загон, выход из загона 
                cost += 1;
                if(Math.abs(deltaX) > Math.abs(deltaY)) {  // если выбранное направление сскоратит дистанцию по максимальной координате еще увеличиваем значимость маршрута
                    cost += 1;
                }
            }
            variant.push({dx:units[u].dx, dy:units[u].dy, cost: cost})
        }
        units[u].dx = -1; // смена направления в '-' по X 
        units[u].dy = 0;
        if(checkDirect(units[u].dx,units[u].dy) == true) {	// проверяем возможно ли движение в выбранном направлении
            cost = 1;                                     	// если двигаться можно ставим минимальный cost
            if(deltaX < 0) {  // проверяемое направление совпадает с направлением на выбранную точку: юнит игрока, загон, выход из загона 
                cost += 1;
                if(Math.abs(deltaX) > Math.abs(deltaY)) {	// если выбранное направление сскоратит дистанцию по максимальной координате еще увеличиваем значимость маршрута
                    cost += 1;					// высшая ценность направления - двигаем всторону сокращение максимальной координаты 
                }
            }
            variant.push({dx:units[u].dx, dy:units[u].dy, cost: cost})
        }
        units[u].dx = 0; 	// двигаемся в том же направлении
        units[u].dy = units[u].cdy;
        if(checkDirect(units[u].dx,units[u].dy) == true) { // проверяем возможно ли движение в выбранном направлении
            cost = 1;                                      // если двигаться можно ставим минимальный cost
            if(((deltaY < 0) && (units[u].cdy < 0)) || ((deltaY > 0) && (units[u].cdy > 0))) {  // если существующее направление совпадает с направлением на выбранную точку: юнит игрока, загон, выход из загона 
                cost += 1; // если 
            }
            variant.push({dx:units[u].dx, dy:units[u].dy, cost: cost})
        }
        // уровни не мои и оказалось на третьем уровне есть тупиковая структура, нужно реверсировать движение если нет других вариантов
        if(variant.length == 0) {
            units[u].dx = 0;
            units[u].dy = -units[u].dy; // двигаемся в обратном направлении
            variant.push({dx:units[u].dx, dy:units[u].dy, cost: 1})
        }
    }
    if(units[u].cdy == 0) { 	// если существующее движение по оси X. Проверяем направо, налево и в том же направлении
        units[u].dx = 0;
        units[u].dy = 1;        // смена направления в '+' по Y
        if(checkDirect(units[u].dx,units[u].dy) == true) { // проверяем возможно ли движение в выбранном направлении
            cost = 1;           // если двигаться можно ставим минимальный cost
            if(deltaY > 0) {	// проверяемое направление совпадает с направлением на выбранную точку: юнит игрока, загон, выход из загона 
                cost += 1;
                if(Math.abs(deltaY) > Math.abs(deltaX)) {  // если выбранное направление сскоратит дистанцию по максимальной координате еще увеличиваем значимость маршрута
                    cost += 1;
                }
            }
            variant.push({dx:units[u].dx, dy:units[u].dy, cost: cost})
        }
        units[u].dx = 0;
        units[u].dy = -1; 	// смена направления в '-' по Y
        if(checkDirect(units[u].dx,units[u].dy) == true) { // проверяем возможно ли движение в выбранном направлении
            cost = 1;           // если двигаться можно ставим минимальный cost
            if(deltaY < 0) {	// проверяемое направление совпадает с направлением на выбранную точку: юнит игрока, загон, выход из загона 
                cost += 1;
                if(Math.abs(deltaY) > Math.abs(deltaX)) {  // если выбранное направление сскоратит дистанцию по максимальной координате еще увеличиваем значимость маршрута
                    cost += 1;
                }
            }
            variant.push({dx:units[u].dx, dy:units[u].dy, cost: cost})
        }
        units[u].dx = units[u].cdx; // в том же направлении, разворот делать нельзя
        units[u].dy = 0;
        if(checkDirect(units[u].dx,units[u].dy) == true) {
            cost = 1;                                      // если двигаться можно ставим минимальный cost
            if(((deltaX < 0) && (units[u].cdx < 0)) || ((deltaX > 0) && (units[u].cdx > 0))) {  // проверяемое направление совпадает с направление на игрока
                cost += 1;
            }
            variant.push({dx:units[u].dx, dy:units[u].dy, cost: cost})
        }
        // уровни не мои и оказалось на третьем уровне есть тупиковая структура, нужно реверсировать движение если нет других вариантов
        if(variant.length == 0) {
            units[u].dx = -units[u].dx;	// двигаемся в обратном направлении
            units[u].dy = 0;
            variant.push({dx:units[u].dx, dy:units[u].dy, cost: 1})
        }
    }
//    console.log(variant);

    // выбор направления выбирается по лучшей стоимости маршрута
    cost = 0;
    for(let i = 0; i < variant.length; i++) { // выбираем маршрут с максимальной ценностью
        if(cost == variant[i].cost) {
            nDir.push(i);
        }
        if(cost < variant[i].cost) {
            nDir = []
            nDir.push(i);
            cost = variant[i].cost;
        }
    }
    dir = nDir[Math.floor(Math.random() * nDir.length)];
//    console.log(dir)
    units[u].dx = variant[dir].dx;
    units[u].dy = variant[dir].dy;
}

function boardUpdate() {
    game.time += game.tick / 1000;
    for(u = 0; u < units.length; u++) {
        if(units[u].userControl == false) { // здесь проверка движения ботов
            // восстановление режима атака для ботов спустя время, но только если он не был уничтожен
            if((units[u].state == 1) && ((units[u].stateTime + units[u].stateDelay) < game.time)) {
                console.log(u,"change state 0");
                units[u].state = 0;
//                console.log(units[u].stateTime + units[u].stateDelay);
            }
            botControl(u);
        }
        // этот блок отвечает за проверку возможности применить новое направление движения dx/dy
        // каждый юнит имеет текущий курс cdx/cdy и возможное новое направление dx/dy которое может быть применено в случае если юнит може двигатьсяв эту сторону
        if((units[u].dx != units[u].cdx) || (units[u].dy != units[u].cdy)) { // если не было изменения направления движения то не проверяем возможность смены текущего
            if(checkDirect(units[u].dx,units[u].dy) == true) {
                units[u].cdx = units[u].dx;
                units[u].cdy = units[u].dy;
            }
        }
        // этот блок отвечает за проверку возможности движения текущим курсом cdx/cdy 
        if(checkDirect(units[u].cdx, units[u].cdy) == true) {
            unitMove(u, units[u].posX + units[u].cdx, units[u].posY + units[u].cdy);
        }
        else { // если движение невозможно останавливаем юнит игрока
            if(units[u].userControl == true) {
                units[u].cdx = 0;
                units[u].cdy = 0;
            }
        }
    }
    if(isEnd()) {
        clearInterval(game.timeId);
        confirm("Next Stage...");
        setTimeout(() => {console.log("Next Stage...");}, 3000);
        initLevel(game.stage+1);
    }
    if(units[0].state == 1) {
        clearInterval(game.timeId);
        units[0].state = 0;
        if(game.health > 0) {
            game.tick = 100;
            initLevel(game.stage);	// перезапуск с текущего уровня с перезапуском счетчиков, но с сохранением счета и жизней
            game.health--;
        }
        else {	// жизни закончились
            confirm("User Dead.");
            setTimeout(() => {console.log("User Dead.");}, 5000);
            game.level = 0;		// уровня 0 не существут, это для того чтобы инициализируемый первый уровень отличался от текущего
            game.count = 0;
            game.time = 0;
            game.health = 3;
            game.tick = 100;
            game.nextpay = 1;
            initLevel(1);
        }
    }
}

document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    switch(keyName) {
        case 'Up': // IE/Edge specific value
        case 'ArrowUp':
            units[0].dx = 0;
            units[0].dy = -1;
            break;
        case 'Down': // IE/Edge specific value
        case 'ArrowDown':
            units[0].dx = 0;
            units[0].dy = 1;
            break;
        case 'Left': // IE/Edge specific value
        case 'ArrowLeft':
            units[0].dx = -1;
            units[0].dy = 0;
            break;
        case 'Right': // IE/Edge specific value
        case 'ArrowRight':
            units[0].dx = 1;
            units[0].dy = 0;
            break;
        default:
            units[0].dx = 0;
            units[0].dy = 0;
    }
}, false);
