import { Controller } from "@hotwired/stimulus"
// import vis from 'vis-network'

// Connects to data-controller="mindmap"
/**
 * Controller class for the mindmap functionality.
 */
export default class extends Controller {
  /**
   * Values for the node and edge arrays.
   * @type {Object}
   * @static
   */
  static values = { node: Array, edge: Array }

  /**
   * Connects the mindmap controller.
   */
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
      locale: 'fr',
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
      layout: {
        hierarchical: {
          direction:  "UD",
          sortMethod: "directed",
        },
      },
      manipulation: {
        enabled: true,
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
      },
      physics: {
        hierarchicalRepulsion: {
          avoidOverlap: 300,
        },
        forceAtlas2Based: {
          gravitationalConstant: -1500,
          centralGravity: 0.0010,
          springLength: 500,
          springConstant: 0.18,
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: { iterations: 150 },
      },
      edges: {
        arrows: "to",
      },
    }

    var nodenetwork = new vis.Network(container, data, options);

    /**
     * Event listener for double click on nodes.
     * @param {Object} params - The event parameters.
     */
    nodenetwork.on("doubleClick", function (params) {
      if (params.nodes.length > 0) {
        var nodeId = params.nodes[0];
        window.location.href = `/nodes/${nodeId}`;
      }
    });
  }
}
