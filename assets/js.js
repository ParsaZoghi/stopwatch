let _superSetInterval
let _mili = 0
let _sec = 0
let _min = 0

function _start() {
    if (document.getElementById('start').getAttribute('data-statStart') == 'off') {
        _superSetInterval = setInterval(_startSetInterval, 10)
        document.getElementById('start').setAttribute('data-statStart', 'on')
    }
    document.getElementById('lap').setAttribute('data-statLap', 'on')
}

function _startSetInterval() {
    _mili++
    if (_mili > 99) {
        _mili = 0
        _sec++
        if (_sec > 59) {
            _sec = 0
            _min++
            if (_min < 60) {
                document.getElementById('minutes').innerHTML = '0' + _min
            } else {
                document.getElementById('minutes').innerHTML = _min
            }
        }
        if (_sec < 60) {
            document.getElementById('seconds').innerHTML = '0' + _sec
        } else {
            document.getElementById('seconds').innerHTML = _sec
        }
    }
    if (_mili < 10) {
        document.getElementById('miliseconds').innerHTML = '0' + _mili
    } else {
        document.getElementById('miliseconds').innerHTML = _mili
    }
    if (_sec < 10) {
        document.getElementById('seconds').innerHTML = '0' + _sec
    } else {
        document.getElementById('seconds').innerHTML = _sec
    }
    if (_min < 10) {
        document.getElementById('minutes').innerHTML = '0' + _min
    } else {
        document.getElementById('minutes').innerHTML = _min
    }

}
function _pause() {
    document.getElementById('start').setAttribute('data-statStart', 'off')
    clearInterval(_superSetInterval)
}

function _clear() {
    document.getElementById('start').setAttribute('data-statStart', 'off')
    document.getElementById('lap').setAttribute('data-statLap', 'off')
    _mili = 0
    _sec = 0
    _min = 0
    document.getElementById('miliseconds').innerHTML = '0' + _mili
    document.getElementById('seconds').innerHTML = '0' + _sec
    document.getElementById('minutes').innerHTML = '0' + _min
    clearInterval(_superSetInterval)
}

function _lap() {
    if (document.getElementById('lap').getAttribute('data-statLap') == 'on') {
        let _temp = document.createElement('li')
        _temp.innerHTML = _min + ':' + _sec + ':' + _mili
        document.getElementById('lapList').appendChild(_temp)
    }
}