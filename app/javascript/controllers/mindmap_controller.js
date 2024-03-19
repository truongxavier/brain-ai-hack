import { Controller } from "@hotwired/stimulus"
// import vis from 'vis-network'

// Connects to data-controller="mindmap"
export default class extends Controller {
  connect() {
    console.log(this.element)
    const nodes = new vis.DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ]);

    const edges = new vis.DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]);

    const container = this.element;
    const data = {
      nodes: nodes,
      edges: edges
    };
    const options = {};
    var nodenetwork = new vis.Network(container, data, options);


    nodenetwork.on("click", function (params) {
      if (params.nodes.length > 0) {
        var nodeId = params.nodes[0];
        window.location.href = `/nodes/${nodeId}`;
      }
    });
  }
}
