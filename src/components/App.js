import React from 'react'
import Header from './Header'
import SearchField from './SearchField'
import CurrentItems from './CurrentItems'
import Favourites from './Favourites'
import Footer from './Footer'
import { parseForKeywords, API_URL } from '../utils/helpers'

class App extends React.Component {
  state = {
    inputValue: 'pesticides',
    favourites: [{"body":"&lt;ul&gt; \n &lt;li&gt;Broken glass and sharp objects can be hazardous to our collections staff.&lt;\/li&gt; \n &lt;li&gt;Securely wrap broken glass and sharp objects in newspaper before placing the item in your &lt;strong&gt;Garbage Bin.&lt;\/strong&gt;&lt;\/li&gt; \n&lt;\/ul&gt;","category":"Garbage","title":"Garbage Bin (broken glass & knives)","keywords":"mirror, mirror (broken), coffee maker (broken glass), ceramic dish (broken), paring knife, sharp knife, utensil, carving knife, knives, fork, can opener, nail, screw, nut, bolt"}],
    loading: false,
    currentItems: [{"id":"9fLcKEW_PcJqO8JNRO3fJg","body":"&lt;ul&gt;\n&lt;li&gt;This item is&amp;nbsp;&lt;a href=&quot;https:\/\/www.toronto.ca\/services-payments\/recycling-organics-garbage\/household-hazardous-waste\/&quot; target=&quot;_self&quot;&gt;Household Hazardous Waste (HHW)&lt;\/a&gt;&amp;nbsp;and MUST NOT be placed in your Garbage Bin, Blue Bin, Green Bin or put down the drain\/toilet\/sewer.&lt;\/li&gt;\n&lt;li&gt;Please take this item to one of the City&#x27;s&amp;nbsp;&lt;a href=&quot;http:\/\/www.toronto.ca\/garbage\/depots.htm&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;Drop-Off Depots&lt;\/a&gt;&amp;nbsp;or&amp;nbsp;&lt;a href=&quot;http:\/\/www.toronto.ca\/environment_days\/index.htm&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;Community Environment Days&lt;\/a&gt;.&lt;\/li&gt;\n&lt;li&gt;For HHW between 10 to 50 litres\/kilograms, residents can also request a free Toxic Taxi pick-up&amp;nbsp;&lt;a href=&quot;https:\/\/secure.toronto.ca\/webwizard\/html\/household_hazardous_waste.htm&quot;&gt;online&lt;\/a&gt;&amp;nbsp;or by calling 311. Residents can also check the&amp;nbsp;&lt;a href=&quot;http:\/\/www.makethedrop.ca.&quot; target=&quot;_blank&quot; rel=&quot;noopener&quot;&gt;Orange Drop Program&lt;\/a&gt;.&lt;\/li&gt;\n&lt;\/ul&gt;","category":"HHW","title":"HHW (fertilizers, pesticides, herbicides - Orange Drop items)","keywords":"fertilizer, pesticide, lawn chemicals, Miracle Grow, insect repellent, insecticide, herbicide, round up, round-up, weed killer, garden chemical, 2-4-D, 24D, Diazinon, weed spray"}]
  }

  fetchNewItems = async () => {
    const { inputValue } = this.state
    if (inputValue.length === 0) {
      return
    }
    if (this.state.loading) {
      return
    }
    this.setState({
      loading: true
    })
    const data = await fetch(API_URL)
    const itemsList = await data.json()
    const currentItems = itemsList.filter(item => (
      parseForKeywords(item.keywords).includes(inputValue) ||
      item.title.indexOf(inputValue) >= 0
    ))
    this.setState({
      currentItems,
      loading: false
    })
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.fetchNewItems()
    }
  }

  addToFavourites = (item) => {
    this.setState(prevState => {
      return {
        favourites: [...prevState.favourites, item]
      }
    })
  }

  removeFromFavourites = (item) => {
    this.setState(prevState => {
      const newFavourites = prevState.favourites.filter(currentItem => (
        JSON.stringify(currentItem) !== JSON.stringify(item)
      ))
      return {
        favourites: newFavourites
      }
    })
  }

  handleInputChange = (event) => {
    const newValue = event.target.value
    const isEmpty = newValue.length === 0

    this.setState(prevState => {
      return {
        inputValue: newValue,
        currentItems: isEmpty ? [] : prevState.currentItems
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <SearchField 
          handleKeyPress={this.handleKeyPress}
          handleInputChange={this.handleInputChange}
          fetchNewItems={this.fetchNewItems}
          inputValue={this.state.inputValue}
        />
        <CurrentItems
          favourites={this.state.favourites}
          currentItems={this.state.currentItems}
          addToFavourites={this.addToFavourites}
          removeFromFavourites={this.removeFromFavourites}
          loading={this.state.loading}
        />
        <Favourites 
          favourites={this.state.favourites}
          removeFromFavourites={this.removeFromFavourites}
        />
        <Footer />
      </div>
    )
  }
}

export default App
