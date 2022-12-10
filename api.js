document.createElement("map")
class StrictEqualityExtension {
    getInfo() {
      return {
        id: 'strictequalityexample',
        name: 'ATOS0129 Block',
        blocks: [
          {
            opcode: 'strictlyEquals',
            blockType: Scratch.BlockType.REPORTER,
            text: 'api[ONE]を取得する',
            arguments: {
              ONE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'First value'
              }
            }
          },
        ]
      };
    }
    strictlyEquals(args) {
      return fetch(args.ONE) //1
      .then(response => response.text()) //2
      .then(data => {  //3
       return data;
    });
    }
  }
  Scratch.extensions.register(new StrictEqualityExtension());