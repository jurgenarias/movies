d3.csv("movies.csv").then(function (data) {
  // console.log(data);

  var movies = data;

  var button = d3.select("#button");

  var form = d3.select("#form");

  button.on("click", runEnter);
  form.on("submit", runEnter);

  function runEnter() {
    d3.select("tbody").html("")
    d3.selectAll("p").classed('noresults', true).html("")
    d3.event.preventDefault();
    var inputElement = d3.select("#user-input");
    var inputValue = inputElement.property("value").toLowerCase().trim();

    // console.log(inputValue.length);
    // console.log(movies);
    if (inputValue.length < 6){
      d3.select("p").classed('noresults2', true).html("<center><strong>Please try using more than 5 characters to avoid too many results!</strong>")
      inputValue = "Something to give no results"
    }
    var filteredData = movies.filter(movies => movies.actors.toLowerCase().trim().includes(inputValue));
    // console.log(filteredData.length)
    if (filteredData.length === 0 && inputValue !== "Something to give no results"){
      d3.select("p").classed('noresults', true).html("<center><strong>No results. Please check your spelling!</strong>")
    }
    output = _.sortBy(filteredData, 'avg_vote').reverse()

    for (var i = 0; i < filteredData.length; i++) {
      // console.log(output[i]['original_title'])
      // console.log(output[i]['avg_vote'])
      // d3.select("tbody>tr>td").text(output[i]['original_title']);
      d3.select("tbody").insert("tr").html("<td>"+[i+1]+"</td>"+"<td>"+"<a href=https://www.imdb.com/title/"+output[i]['imdb_title_id']+" target='_blank'>"+(output[i]['original_title'])+"</a>"
      + "</td>" +"<td>" +(output[i]['avg_vote'])+"</td>" +"<td>" +(output[i]['year'])+"</td>"  +"<td>" +(output[i]['director'])+"</td>"+"<td>" +(output[i]['description'])+"</td>") }
  };
  window.resizeTo(screen.width,screen.height)


});