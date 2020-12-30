d3.csv("movies.csv").then(function (data) {
  // console.log(data);


  // Assign the data from `data.js` to a descriptive variable
  var movies = data;

  // Select the button
  var button = d3.select("#button");

  // Select the form
  var form = d3.select("#form");

  // Create event handlers 
  button.on("click", runEnter);
  form.on("submit", runEnter);

  /* important! for alignment, you should make things
 * relative to the canvas' current width/height.
 */

  // Complete the event handler function for the form
  function runEnter() {
    d3.select("tbody").html("")
    d3.selectAll("p").classed('noresults', true).html("")
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // window.resizeTo(width, height);

    // window.addEventListener('resize',function(){"use strict"; 
    // window.location.reload(); });
   // window.resizeTo(width, height);

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#patient-form-input");

    // Get the value property of the input element
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
      // console.log("a ver")
      // d3.select("tbody").insert("tr").html("<td></td><td></td><strong>No results. Please check your spelling!</strong>") 
      d3.select("p").classed('noresults', true).html("<center><strong>No results. Please check your spelling!</strong>")
    }
    output = _.sortBy(filteredData, 'avg_vote').reverse()
    // rating = []
    // title = []
    for (var i = 0; i < filteredData.length; i++) {
      // console.log(output[i]['original_title'])
      // console.log(output[i]['avg_vote'])
      // d3.select("tbody>tr>td").text(output[i]['original_title']);
      d3.select("tbody").insert("tr").html("<td>"+[i+1]+"</td>"+"<td>"+"<a href=https://www.imdb.com/title/"+output[i]['imdb_title_id']+" target='_blank'>"+(output[i]['original_title'])+"</a>"
      + "</td>" +"<td>" +(output[i]['avg_vote'])+"</td>" +"<td>" +(output[i]['year'])+"</td>" +"<td>" +(output[i]['description'])+"</td") }

      // var data = filteredData
    // var lines = data.split("\n"),
        // output2 = [],
    //     i;
    // for (i = 0; i < filteredData.length; i++)
        // output2.push("<tr>"+ "<td>"+(output[i]['original_title'])
        //             + "</td></tr>");
    // output2 = "<table>" + output2.join("") + "</table>";
// console.log(output2)
// d3.select("tbody").html(output2)}
    //     const r = filteredData[i]['avg_vote']
    //     const t = filteredData[i]['original_title']
    //     rating.push(r, t)
    //     // title.push(t)
    //     // console.log(filteredData[i]['original_title'])
    //     // console.log(list[0].sort())
    //     // console.log(filteredData[i]['actors'])
    //   }
    //   ;
    //   console.log(rating.sort((a,b)=>b-a))
    // rating.sort();

    // BONUS: Calculate summary statistics for the age field of the filtered data

    // First, create an array with just the age values
    // var ages = filteredData.map(person => person.age);

    // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
    // var mean = math.mean(ages);
    // var median = math.median(ages);
    // var mode = math.mode(ages);
    // var variance = math.var(ages);
    // var standardDeviation = math.std(ages);

    // Then, select the unordered list element by class name
    // var list = d3.select(".summary");

    // remove any children from the list to
    // list.html("");

    // append stats to the list
    // list.append("li").text(`Mean: ${mean}`);
    // list.append("li").text(`Median: ${median}`);
    // list.append("li").text(`Mode: ${mode}`);
    // list.append("li").text(`Variance: ${variance}`);
    // list.append("li").text(`Standard Deviation: ${standardDeviation}`);
  };
  window.resizeTo(screen.width,screen.height)


});