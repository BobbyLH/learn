class PriorityQueue {
  constructor (fn) {
    this.priority = fn
    this.queue = {}
  }

  enqueue (obj) {
    if (this.priority) {
      const weight = this.priority(obj)
      if (this.queue[weight]) {
        this.queue[weight].push(obj)
      } else {
        this.queue[weight] = [{...obj}]
      }

      return this.queue
    }
  }

  dequeue () {
    console.log('this.queue', this.queue)
    const weights = Object.keys(this.queue)
    Array.prototype.sort.call(weights, (a, b) => a - b)
    const min = weights[0]
    const res = Array.prototype.shift.call(this.queue[min])
    if (this.queue[min].length === 0) delete this.queue[min]

    return res
  }
}

const fn = (memeber) => memeber.a + memeber.b
const pq = new PriorityQueue(fn)

// console.log(pq.enqueue({ a: 22, b: 33 }));
// console.log(pq.enqueue({ b: 33, a: 15 }));
// console.log(pq.dequeue());