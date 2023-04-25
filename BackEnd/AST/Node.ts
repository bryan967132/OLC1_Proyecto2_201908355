export class Node {
    private children : Node[];
    constructor(tag: string,terminal?: Object);
    constructor(private tag: string,public terminal: Object) {
        this.children = []
    }
    public getDot(): string {
        return 'digraph AFD {\n\tgraph[fontname=\"Arial\" labelloc=\"t\"];\n\tnode[fontname=\"Arial\" fontsize=\"8\" width=\"0\" height=\"0\"];\n\tedge[fontname=\"Arial\"];' + this.getNodes('i') + '\n}';
    }
    private getNodes(tag: string): string {
        let dot: string = `\n\tnode_${tag}[label = "${this.tag}"];`
        for(let i: number = 0; i < this.children.length; i ++) {
            dot += this.children[i].getNodes(tag + i);
            dot += `\n\tnode_${tag} -> node_${tag + i};`
        }
        return dot;
    }
    public pushChild(child: Node) {
        this.children.push(child);
    }
}