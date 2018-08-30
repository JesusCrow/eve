import {on, once, emit} from './'

test('on', t => {
  let yourName
  const e = on('hola', name => {
    yourName = name
  })
  emit('hola', 'taki')
  t.is(yourName, 'taki')
  e()
  emit('hola', 'mitsuha')
  t.is(yourName, 'taki')
})

test('once', t => {
  let yourName
  once('hola', name => {
    yourName = name
  })
  emit('hola', 'taki')
  t.is(yourName, 'taki')
  emit('hola', 'mitsuha')
  t.is(yourName, 'taki')
})

test('wildcard', t => {
  let yourName
  on('*', (type, name) => {
    t.is(type, 'foo')
    yourName = name
  })
  emit('foo', 'taki')
  t.is(yourName, 'taki')
})
