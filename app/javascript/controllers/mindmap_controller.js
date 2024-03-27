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
  static targets = ["forminsert", "formedit", "map", "button", "buttonedit", "simpleForm", "parent"]
  static values = { node: Array, edge: Array }

  /**
   * Connects the mindmap controller.
   */
  connect() {
    console.log(this.formTarget)
    console.log(this.mapTarget)
    const nodes = new vis.DataSet(this.nodeValue);
    const edges = new vis.DataSet(this.edgeValue);
    const container = this.mapTarget;
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

      physics: {
        hierarchicalRepulsion: {
          avoidOverlap: 300,
        },
        forceAtlas2Based: {
          gravitationalConstant: -1500,
          centralGravity: 0.0005,
          springLength: 500,
          springConstant: 0.18,
          avoidOverlap: 1,
        },
        maxVelocity: 146,
        solver: "forceAtlas2Based",
        timestep: 0.35,
        stabilization: { iterations: 150 },
      },
      edges: {
        color: "#1a3096",
        arrows: "to",
        width: 2,
      },
    };

    var nodenetwork = new vis.Network(container, data, options);
    const form = this.simpleFormTarget;
    const parent = this.parentTarget;
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

    nodenetwork.on("click", function (params) {
      if (params.nodes.length > 0) {
        var nodeId = params.nodes[0];
        console.log(nodeId);
        console.log(form);
        form.action = `/nodes/${nodeId}`;
        form.method = "patch";
        parent.value = nodeId;
      }
    });
  }

  addNode(event) {
    event.target.classList.toggle("d-none")
    this.forminsertTarget.classList.toggle("d-none")
  }

  display() {
    this.forminsertTarget.classList.toggle("d-none")
    this.buttonTarget.classList.toggle("d-none")
  }

  editNode(event) {
    event.target.classList.toggle("d-none")
    this.formeditTarget.classList.toggle("d-none")
  }

  displayedit() {
    this.formeditTarget.classList.toggle("d-none")
    this.buttonTarget.classList.toggle("d-none")
  }

}
