import { Controller } from "@hotwired/stimulus"
// import vis from 'vis-network'

// Connects to data-controller="mindmap"
export default class extends Controller {
  static values = { node: Array, edge: Array }

  connect() {
    const nodes = new vis.DataSet(this.nodeValue);
    const edges = new vis.DataSet(this.edgeValue);
    const container = this.element;
    const data = {
      nodes: nodes,
      edges: edges
    };
    const options = {
      // configure: {
      //   enabled: true,
      //   filter: 'nodes,edges',
      //   container: undefined,
      //   showButton: true
      // },
      nodes:{
        color: '#64145e',
        fixed: false,
        physics: true,
        font: '16px arial white',
        shape: 'box',
        scaling: {
          label: true
        },
        shadow: true
      },
      manipulation: {
        enabled: false,
        initiallyActive: false,
        addNode: true,
        addEdge: true,
        editNode: undefined,
        editEdge: true,
        deleteNode: true,
        deleteEdge: true,
        controlNodeStyle:{
          // all node options are valid.
        }
      }
    }

    var nodenetwork = new vis.Network(container, data, options);


    nodenetwork.on("click", function (params) {
      if (params.nodes.length > 0) {
        var nodeId = params.nodes[0];
        window.location.href = `/nodes/${nodeId}`;
      }
    });
  }
}
