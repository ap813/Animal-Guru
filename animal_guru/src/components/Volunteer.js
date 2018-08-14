import React, { Component } from 'react'
import Navbar from './Navbar';
import '../styles/Volunteer.css'

export default class Volunteer extends Component {
  render() {
    return (
      <div>
        <Navbar />
            
        <div class="container">
            <div className="MarginingPostForm">
                <div class="jumbotron">
                    <div className="Middle">
                        <h1>Becoming a Volunteer</h1>
                        <p><em>Responsiblities</em></p>
                    </div>
                </div>
            </div>

            <div class="card bg-light">
                <div class="card-block">
                    <h1 className="Middle">Jobs for Volunteers</h1>
                    <p class="card-text">
                    <h3>Front Desk Attendant</h3>
                    <p className="paragraph_styling">
                    Helps to manage paperwork and get guests looking for
                    a new pet. Also, with cleaning the front desk area and coordinates what other volunteers
                    will be doing that day.
                    </p>
                    <h3>Cat Quarters Attendant</h3>
                    <p className="paragraph_styling">
                    Works with other volunteers to keep the cat room clean. Helps guests that visit by bring
                    cats out of their cages to designated play rooms. Cat Quarters Attendants try to promote adoption
                    of cats that have been at Animal Guru the longest. This job involves a lot of guest interaction.
                    This job is has two time slots: Open-3p.m. and 3p.m.-Close.
                    </p>
                    <h3>Puppy Palace Attendant</h3>
                    <p className="paragraph_styling">
                    Works with other volunteers to keep the puppy palace clean. Helps guests that visit by bring
                    dogs out of their cages to designated play rooms. Puppy Palace Attendants try to promote adoption
                    of dogs that have been at Animal Guru the longest. This job involves a lot of guest interaction.
                    This job is has two time slots: Open-3p.m. and 3p.m.-Close.
                    </p>
                    <h3>Animal Care Specialist</h3>
                    <p className="paragraph_styling">
                    The role of the Animal Care Specialist is extremely important. Their job is to give each animal a
                    special time of the day where the feel loved. This means getting to play with cats or dogs, or taking
                    dogs out on walks. All of our animals need to feel loved to get them ready for their new homes, so this
                    job helps with preparing the animals for times they could be adopted.
                    </p>
                    <h3>Animal Cleaner</h3>
                    <p className="paragraph_styling">
                    Day Time: Animals at Animal Guru get washed once a week. We like to keep the animals cleaned because of the high
                    volume of interaction they receive. As an Animal Cleaner, you get to be in close quarters with cats and
                    dogs throughout the day.
                    Night Time: Animal Cleaners help to clean up the mess of an exciting day at Animal Guru. This job is especially 
                    important because it helps to keep the animals clean as well as the places where they sleep. This duty includes
                    cleaning the cages, sweeping the floors, mopping the floors, cleaning out the play areas, and wiping down glass.
                    </p>
                    <h1 className="Middle">Expectations of Volunteers</h1>
                    <p>

                    </p>
                    </p>
                    <div class="Middle">
                    <a href="/signup" class="btn btn-secondary">Become a Volunteer</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
