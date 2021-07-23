const Ws = use('Ws')

function broadcast (id, type, data) {
  const channel = Ws.getChannel('room:*')
  console.log(channel);
  if (!channel) return

  const topic = channel.topic(`room:${id}`)
  console.log(channel);

  if (!topic) {
    console.error('Has no topic')
    return
  }

  // emit, broadcast, broadcastToAll
  topic.broadcastToAll(`message`, {
    type,
    data
  });
}

module.exports = {
  broadcast
}
