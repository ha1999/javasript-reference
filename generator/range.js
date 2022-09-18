function range(from, to, step = 1) {
    return [...{
        from,
        to,
        *[Symbol.iterator]() {
            for (let value = this.from; value <= this.to; value += step) {
                yield value;
            }
        }
    }];
}

console.log(range(1, 10, 1).join("->")); // 1->2->3->4->5->6->7->8->9->10
console.log(range(0, 100, 20).join("->")); // 0->20->40->60->80->100