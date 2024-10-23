import React, { useEffect, useRef, useState } from "react";
// import {client} from '../../Client'
import "./Quiz.css";

import { toast } from "react-toastify";

const Quiz = () => {
  let [allQuestions, setAllQuestoins] = useState([]);

  useEffect(() => {
    const staticQuestions = [
      {
        question: "Scarcity of food is a:",

        option1: "pull factor",
        option2: "push factor",
        option3: "demographic factor",
        option4: "Chemical",

        answer: 1,
      },
      {
        question:
          "The Geographical discipline of Climatology is most closely related to:",

        option1: "Geology",
        option2: "Meteorology",
        option3: "Hydrology",
        option4: "Pedology",

        answer: 1,
      },
      {
        question:
          "The Trinity explosion of 1945 is taken as the beginning of the:",

        option1: "Holocene",
        option2: "Cenocene",
        option3: "Anthropocene",
        option4: "Eocene",

        answer: 2,
      },
      {
        question: "In the word root for conservation, con stands for:",

        option1: "to keep",
        option2: "together",
        option3: "house",
        option4: "manage",

        answer: 1,
      },
      {
        question: "In the word root for conservation, servare stands for:",

        option1: "to keep",
        option2: "together",
        option3: "house",
        option4: "manage",

        answer: 0,
      },
      {
        question: "Good climate is a:",

        option1: "pull factor",
        option2: "push factor",
        option3: "chemical factor",
        option4: "demographic factor",

        answer: 0,
      },
      {
        question:
          '"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor." This is the statement for',

        option1: "Liebig’s law of the minimum",
        option2: "Liebig’s law of the maximum",
        option3: "Shelford’s law of tolerance",
        option4: "Shelford’s law of intolerance",

        answer: 0,
      },
      {
        question: "The discipline of Demography is most closely related to:",

        option1: "Population Geography",
        option2: "Phytogeography",
        option3: "Economic Geography",
        option4: "Zoogeography",

        answer: 0,
      },
      {
        question:
          '"Allowing some places and some creatures to exist without significant human interference" is the definition of:',

        option1: "conservation",
        option2: "environmentalism",
        option3: "preservation",
        option4: "ecology",

        answer: 2,
      },
      {
        question:
          "The movement of lions across the Gir landscape is an example of:",

        option1: "secular dispersal",
        option2: "diffusion",
        option3: "jump dispersal",
        option4: "drifting",

        answer: 1,
      },
      {
        question: "Which of these is true about P waves?",

        option1: "these are longitudinal waves",
        option2: "these are transverse in nature",
        option3: "they cannot move through gases",
        option4: "they cannot move through liquids",

        answer: 0,
      },
      {
        question: "Inclusions are older than the host rock. This is known as:",

        option1: "principle of superposition",
        option2: "principle of original horizontality",
        option3: "principle of lateral continuity",
        option4: "principle of inclusions",

        answer: 3,
      },
      {
        question: "Mount Fuji is an example of:",

        option1: "shield volcano",
        option2: "stratovolcano",
        option3: "caldera",
        option4: "flood basalt province",

        answer: 1,
      },
      {
        question:
          "Layers of rocks deposited from above (e.g. sediments and lava flows) are originally laid down horizontally. This is known as:",

        option1: "principle of superposition",
        option2: "principle of original horizontality",
        option3: "principle of lateral continuity",
        option4: "principle of inclusions",

        answer: 1,
      },
      {
        question: "Which of these is not a method of absolute dating?",

        option1: "radioisotope dating",
        option2: "thermoluminescence dating",
        option3: "inclusion study",
        option4: "fission track dating",

        answer: 2,
      },
      {
        question: "Which of these is true about S waves?",

        option1: "they are longitudinal in nature",
        option2: "they are transverse in nature",
        option3: "they cannot move through solids, liquids and gases",
        option4: "they are the first to reach the surface of the Earth",

        answer: 1,
      },
      {
        question:
          "Which of these is an example of direct source of information about Earth?",

        option1: "earthquake",
        option2: "volcanic eruption",
        option3: "magnetic survey",
        option4: "gravity anomaly",

        answer: 1,
      },
      {
        question:
          "Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as:",

        option1: "principle of fossil succession",
        option2: "principle of original horizontality",
        option3: "principle of superposition",
        option4: "principle of cross-cutting relationships",

        answer: 0,
      },
      {
        question:
          "Within a depositional basin, strata are laterally continuous in all directions till the edge basin. This is known as:",

        option1: "principle of superposition",
        option2: "principle of original horizontality",
        option3: "principle of lateral continuity",
        option4: "principle of inclusions",

        answer: 2,
      },
      {
        question: "Krakatoa eruptions resulted in the formation of:",

        option1: "shield volcano",
        option2: "stratovolcano",
        option3: "caldera",
        option4: "flood basalt province",

        answer: 2,
      },
      {
        question: "'Waxy' is an example of:",

        option1: "cleavage",
        option2: "structure",
        option3: "lustre",
        option4: "streak",

        answer: 2,
      },
      {
        question: "'Ease of passage of light through mineral' is known as:",

        option1: "transparency",
        option2: "fracture",
        option3: "structure",
        option4: "streak",

        answer: 0,
      },
      {
        question:
          "'Unassorted coarse and fine debris left by melting glaciers, often with angular to sub-angular rock fragments' is the definition of:",

        option1: "glacial till",
        option2: "outwash deposit",
        option3: "esker",
        option4: "drumlin",

        answer: 0,
      },
      {
        question:
          "'Green or black-colored inosilicates forming 10% of the Earth's crust' is a description of:",

        option1: "amphiboles",
        option2: "quartz",
        option3: "feldspar",
        option4: "pyroxene",

        answer: 3,
      },
      {
        question:
          "'The ridge edge where two cirques meet' is the definition of:",

        option1: "glacier",
        option2: "arete",
        option3: "horn",
        option4: "hanging valley",

        answer: 1,
      },
      {
        question: "Mechanical action of ocean waves is an example of:",

        option1: "chemical weathering",
        option2: "physical weathering",
        option3: "biological weathering",
        option4: "none of the above",

        answer: 1,
      },
      {
        question: "Sudden cooling of magma results in:",

        option1: "smooth grained sedimentary rocks",
        option2: "coarse grained sedimentary rocks",
        option3: "smooth grained igneous rocks",
        option4: "coarse grained igneous rocks",

        answer: 2,
      },
      {
        question: "Gypsum is an example of:",

        option1: "siliciclastic rock",
        option2: "carbonate rock",
        option3: "evaporite rock",
        option4: "phosphatic rock",

        answer: 2,
      },
      {
        question: "Thermal stresses lead to:",

        option1: "chemical weathering",
        option2: "physical weathering",
        option3: "biological weathering",
        option4: "none of the above",

        answer: 1,
      },
      {
        question:
          "Which of these are correctly arranged as per Moh's scale from softest to hardest?",

        option1: "talc, apatite, fluorite, diamond",
        option2: "talc, calcite, feldspar, diamond",
        option3: "talc, fluorite, apatite, diamond",
        option4: "diamond, feldspar, calcite, talc",

        answer: 1,
      },
      {
        question: "Which of these is the densest layer?",

        option1: "troposphere",
        option2: "stratosphere",
        option3: "mesosphere",
        option4: "thermosphere",

        answer: 0,
      },
      {
        question:
          "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called:",

        option1: "adaptation",
        option2: "mitigation",
        option3: "deceleration",
        option4: "maladaptation",

        answer: 1,
      },
      {
        question: "Which of these is not a climatic forcing for Earth?",

        option1: "changes in plate tectonics",
        option2: "changes in Earth's orbit",
        option3: "changes in Sun's orbit",
        option4: "changes in sun's strength",

        answer: 2,
      },
      {
        question: "Which of these contains the most water vapour and aerosols?",

        option1: "troposphere",
        option2: "stratosphere",
        option3: "mesosphere",
        option4: "thermosphere",

        answer: 0,
      },
      {
        question: "Which of these is true about Coriolis force on the Earth?",

        option1: "it is maximum at pole and zero at equator",
        option2: "it is zero at poles and maximum at equator",
        option3: "in the Northern hemisphere, it deflects winds towards left",
        option4: "in the Southern hemisphere, it deflects winds towards right",

        answer: 0,
      },
      {
        question:
          "From the surface of the Earth to upwards, which of these is the correct sequence of atmospheric layers?",

        option1:
          "troposphere, stratosphere, mesosphere, thermosphere, exosphere",
        option2:
          "troposphere, mesosphere, stratosphere, thermosphere, exosphere",
        option3:
          "troposphere, thermosphere, mesosphere, stratosphere, exosphere",
        option4:
          "troposphere, exosphere, thermosphere, mesosphere, stratosphere",

        answer: 0,
      },
      {
        question:
          "'The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences' is a definition of:",

        option1: "adaptive response",
        option2: "adaptive capacity",
        option3: "mitigative response",
        option4: "mitigative capacity",

        answer: 1,
      },
      {
        question: "Flights of jet planes typically occur in:",

        option1: "troposphere",
        option2: "stratosphere",
        option3: "mesosphere",
        option4: "thermosphere",

        answer: 1,
      },
      {
        question: "Noctilucent clouds are present in which layer?",

        option1: "troposphere",
        option2: "stratosphere",
        option3: "mesosphere",
        option4: "thermosphere",

        answer: 2,
      },
      {
        question: "Ionosphere is part of which layer?",

        option1: "troposphere",
        option2: "stratosphere",
        option3: "mesosphere",
        option4: "thermosphere",

        answer: 3,
      },
      {
        question: "Continental slope has a gradient of:",

        option1: "0-1 degree",
        option2: "1-2 degree",
        option3: "2-5 degree",
        option4: "5-10 degree",

        answer: 2,
      },
      {
        question:
          "'Low islands consisting of coral reefs surrounding a central depression' is a definition of:",

        option1: "oceanic deep/ trench",
        option2: "mid-oceanic ridge",
        option3: "seamount",
        option4: "atoll",

        answer: 3,
      },
      {
        question:
          "'Deep valleys, often cutting across continental shelves and slopes' is a description of:",

        option1: "oceanic deep/ trench",
        option2: "mid-oceanic ridge",
        option3: "guyot",
        option4: "submarine canyon",

        answer: 3,
      },
      {
        question: "Equal density curves are called:",

        option1: "isopycnal curves",
        option2: "isohaline curves",
        option3: "isotherm curves",
        option4: "isobuoyant curves",

        answer: 0,
      },
      {
        question: "Equal salinity curves are called:",

        option1: "isopycnal curves",
        option2: "isohaline curves",
        option3: "isotherm curves",
        option4: "isobuoyant curves",

        answer: 1,
      },
      {
        question: "Which of these is a major feature of the ocean floor?",

        option1: "oceanic deep/ trench",
        option2: "mid-oceanic ridge",
        option3: "seamount",
        option4: "atoll",

        answer: 0,
      },
      {
        question: "Equal temperature curves are called:",

        option1: "isopycnal curves",
        option2: "isohaline curves",
        option3: "isotherm curves",
        option4: "isobuoyant curves",

        answer: 2,
      },
      {
        question:
          "Which of these is not a primary force initiating and governing movement of ocean currents?",

        option1: "phase separation",
        option2: "gravity",
        option3: "coriolis force",
        option4: "arrangement of coasts",

        answer: 3,
      },
      {
        question:
          "'Relatively steep-sided, narrow, deep basins' is a description of:",

        option1: "oceanic deep/ trench",
        option2: "mid-oceanic ridge",
        option3: "seamount",
        option4: "atoll",

        answer: 0,
      },
      {
        question: "Which of these is a minor feature of the ocean floor?",

        option1: "continental shelf",
        option2: "continental slope",
        option3: "guyot",
        option4: "abyssal plain",

        answer: 2,
      },
      {
        question: "In Koeppen classification, which is cold arid temperature?",

        option1: "h",
        option2: "k",
        option3: "a",
        option4: "b",

        answer: 1,
      },
      {
        question:
          "Which of these are broad groups of peninsular plateau of India?",

        option1: "the Deccan plateau",
        option2: "the central highlands",
        option3: "the north-eastern plateau",
        option4: "all of these",

        answer: 3,
      },
      {
        question: "In Koeppen classification, which is steppe precipitation?",

        option1: "W",
        option2: "S",
        option3: "f",
        option4: "s",

        answer: 1,
      },
      {
        question:
          "In Koeppen classification, which is warm summer temperature?",

        option1: "h",
        option2: "k",
        option3: "a",
        option4: "b",

        answer: 3,
      },
      {
        question: "In Koeppen classification, which is hot summer temperature?",

        option1: "h",
        option2: "k",
        option3: "a",
        option4: "b",

        answer: 2,
      },
      {
        question:
          "In Koeppen classification, which is cool summer temperature?",

        option1: "c",
        option2: "d",
        option3: "F",
        option4: "T",

        answer: 0,
      },
      {
        question:
          "In Koeppen classification, which is summer dry precipitation?",

        option1: "W",
        option2: "S",
        option3: "f",
        option4: "s",

        answer: 3,
      },
      {
        question:
          "In Koeppen classification, which is monsoonal precipitation?",

        option1: "W",
        option2: "S",
        option3: "m",
        option4: "s",

        answer: 2,
      },
      {
        question:
          "In Koeppen classification, which is polar tundra temperature?",

        option1: "c",
        option2: "d",
        option3: "F",
        option4: "T",

        answer: 3,
      },
      {
        question: "In Koeppen classification, which is polar climate?",

        option1: "A",
        option2: "E",
        option3: "C",
        option4: "B",

        answer: 1,
      },
      {
        question: "The diversity that exists among different geographies is",

        option1: "alpha biodiversity",
        option2: "beta biodiversity",
        option3: "gamma biodiversity",
        option4: "delta biodiversity",

        answer: 2,
      },
      {
        question: "Thermal stresses can lead to",

        option1: "chemical weathering",
        option2: "physical weathering",
        option3: "biological weathering",
        option4: "none of the above",

        answer: 1,
      },
      {
        question: "Vertical arrangement of soil horizons is called",

        option1: "soil texture",
        option2: "soil structure",
        option3: "soil profile",
        option4: "soil science",

        answer: 2,
      },
      {
        question: "A climax caused by wildfires is an example of",

        option1: "climatic climax",
        option2: "edaphic climax",
        option3: "disclimax",
        option4: "catastrophic climax",

        answer: 3,
      },
      {
        question: "Khadar is a type of",

        option1: "black cotton soil",
        option2: "alluvial soil",
        option3: "saline soil",
        option4: "red and yellow soil",

        answer: 1,
      },
      {
        question:
          "The term laterite soil is derived from Latin later which means",

        option1: "red",
        option2: "brick",
        option3: "fertile",
        option4: "infertile",

        answer: 1,
      },
      {
        question: "Which of these has the highest organic matter content?",

        option1: "peaty soil",
        option2: "alluvial soil",
        option3: "saline soil",
        option4: "red and yellow soil",

        answer: 0,
      },
      {
        question:
          "Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups, is a definition of",

        option1: "cells",
        option2: "species",
        option3: "ecosystems",
        option4: "biomes",

        answer: 1,
      },
      {
        question: "Which of these is not a characteristic of pioneer species?",

        option1: "ability to grow on bare rocks",
        option2: "ability to tolerate extreme temperatures",
        option3: "large size",
        option4: "short life span",

        answer: 2,
      },
      {
        question:
          "Which of these depicts correctly the lithosere primary succession?",

        option1:
          "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
        option2:
          "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
        option3:
          "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax",
        option4:
          "rock --> crustose lichen --> foliose lichen --> shrub --> moss --> woodland --> climax",

        answer: 0,
      },
      {
        question: "Soil formation is an example of",

        option1: "provisioning service",
        option2: "regulating service",
        option3: "supporting service",
        option4: "cultural service",

        answer: 2,
      },
      {
        question: "The acronym HIPPO does not include",

        option1: "habitat loss",
        option2: "habitat enhancement",
        option3: "invasive species",
        option4: "human over-population",

        answer: 1,
      },
      {
        question:
          "The elephant has a home range of several square kilometers, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",

        option1: "umbrella species",
        option2: "keystone species",
        option3: "flagship species",
        option4: "all of the above",

        answer: 3,
      },
      {
        question: "Religious benefits are an example of",

        option1: "provisioning service",
        option2: "regulating service",
        option3: "supporting service",
        option4: "cultural service",

        answer: 3,
      },
      {
        question: "Which of these is a deterministic factor?",

        option1: "environmental variation",
        option2: "forest fire",
        option3: "death rate",
        option4: "diseases",

        answer: 2,
      },
      {
        question: "Biological control of pest populations is an example of",

        option1: "provisioning service",
        option2: "regulating service",
        option3: "supporting service",
        option4: "cultural service",

        answer: 1,
      },
      {
        question:
          "According to Leopold, which of these is not a tool of habitat management?",

        option1: "fire",
        option2: "gun",
        option3: "cattle",
        option4: "sickle",

        answer: 3,
      },
      {
        question:
          "People come to Sessa Orchid Sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",

        option1: "umbrella species",
        option2: "keystone species",
        option3: "flagship species",
        option4: "extinct species",

        answer: 2,
      },
      {
        question: "Captive breeding is an example of",

        option1: "in-situ conservation",
        option2: "ex-situ conservation",
        option3: "in-situ preservation",
        option4: "ex-situ preservation",

        answer: 1,
      },
      {
        question:
          "The subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce is the definition of",

        option1: "habitat",
        option2: "ecosystem",
        option3: "biome",
        option4: "biosphere",

        answer: 0,
      },
      {
        question: "Which of these is a pillar of sustainability?",

        option1: "social sustainability",
        option2: "industrial sustainability",
        option3: "agricultural sustainability",
        option4: "trans-boundary sustainability",

        answer: 0,
      },
      {
        question: "Which of these is commonly observed in primitive societies?",

        option1: "environmental determinism",
        option2: "possibilism",
        option3: "neodeterminism",
        option4: "stop and go determinism",

        answer: 0,
      },
      {
        question: "Which of these is a preventive check according to Malthus?",

        option1: "foresight",
        option2: "vice",
        option3: "misery",
        option4: "flood",

        answer: 0,
      },
      {
        question: "Which of these is a positive check according to Malthus?",

        option1: "late marriage",
        option2: "war",
        option3: "celibacy",
        option4: "moral restraint",

        answer: 1,
      },
      {
        question:
          "Which of these is commonly observed during the humanising of nature?",

        option1: "environmental determinism",
        option2: "possibilism",
        option3: "neodeterminism",
        option4: "stop and go determinism",

        answer: 1,
      },
      {
        question: "The logistic growth equation curve is",

        option1: "I shaped",
        option2: "J shaped",
        option3: "S shaped",
        option4: "U shaped",

        answer: 2,
      },
      {
        question: "Which of these is not a pillar of sustainability?",

        option1: "environmental sustainability",
        option2: "economic sustainability",
        option3: "trans-boundary sustainability",
        option4: "social sustainability",

        answer: 2,
      },
      {
        question:
          "The book 'An Essay on the Principle of Population' was written by",

        option1: "Darwin",
        option2: "Malthus",
        option3: "Spencer",
        option4: "Owens",

        answer: 1,
      },
      {
        question: "According to the Malthusian model",

        option1:
          "population grows in geometric progression, food supply increases in arithmetic progression",
        option2:
          "population grows in geometric progression, food supply increases in geometric progression",
        option3:
          "population grows in arithmetic progression, food supply increases in arithmetic progression",
        option4:
          "population grows in arithmetic progression, food supply increases in geometric progression",

        answer: 0,
      },
      {
        question: "The demographic transition sees a society move from",

        option1:
          "high birth rate, low death rate to low birth rate, high death rate",
        option2:
          "low birth rate, high death rate to low birth rate, low death rate",
        option3:
          "high birth rate, high death rate to low birth rate, low death rate",
        option4:
          "high birth rate, high death rate to low birth rate, high death rate",

        answer: 2,
      },
      {
        question:
          "Which of these is the largest source of sulphur oxides in the atmosphere?",

        option1: "electricity generation",
        option2: "mobile sources",
        option3: "industrial processes",
        option4: "residential fuel",

        answer: 0,
      },
      {
        question:
          "'Those resources that are currently being used after surveying, quantification, and qualification' is a definition of",

        option1: "potential resources",
        option2: "actual resources",
        option3: "reserve resources",
        option4: "stock resources",

        answer: 1,
      },
      {
        question: "Rain gardens are primarily meant to",

        option1: "reduce water usage",
        option2: "increase recharge to groundwater",
        option3: "protect existing water sources",
        option4: "increase water flow to streams",

        answer: 1,
      },
      {
        question: "Oil that has not been drilled can be categorised under",

        option1: "potential resources",
        option2: "actual resources",
        option3: "reserve resources",
        option4: "stock resources",

        answer: 0,
      },
      {
        question:
          "Timber from forests that is being harvested can be categorised under",

        option1: "potential resources",
        option2: "actual resources",
        option3: "reserve resources",
        option4: "stock resources",

        answer: 1,
      },
      {
        question:
          "Which of these is the largest source of ammonia (NH3) in the atmosphere?",

        option1: "animal manure",
        option2: "mineral fertilizer",
        option3: "crops and their deposition",
        option4: "human waste",

        answer: 0,
      },
      {
        question:
          "'Those resources that have been surveyed but we lack the technology to use them' is a definition of",

        option1: "potential resources",
        option2: "actual resources",
        option3: "reserve resources",
        option4: "stock resources",

        answer: 3,
      },
      {
        question: "Hydrogen from nuclear fusion comes under the category of",

        option1: "potential resources",
        option2: "actual resources",
        option3: "reserve resources",
        option4: "stock resources",

        answer: 3,
      },
      {
        question:
          "'Those resources that may be used in the future' is a definition of",

        option1: "potential resources",
        option2: "actual resources",
        option3: "reserve resources",
        option4: "stock resources",

        answer: 0,
      },
      {
        question:
          "'The part of actual resources that can be developed profitably in the future' is a definition of",

        option1: "potential resources",
        option2: "actual resources",
        option3: "reserve resources",
        option4: "stock resources",

        answer: 2,
      },
      {
        question: "Oxford can best be categorised as",

        option1: "mining town",
        option2: "garrison town",
        option3: "educational town",
        option4: "religious town",

        answer: 2,
      },
      {
        question: "New Delhi can be best categorised as",

        option1: "administrative town",
        option2: "industrial town",
        option3: "transport town",
        option4: "commercial town",

        answer: 0,
      },
      {
        question: "Vishakapatnam can best be categorised as",

        option1: "administrative town",
        option2: "industrial town",
        option3: "transport town",
        option4: "commercial town",

        answer: 2,
      },
      {
        question: "Varanasi can best be categorised as",

        option1: "mining town",
        option2: "garrison town",
        option3: "educational town",
        option4: "religious town",

        answer: 3,
      },
      {
        question:
          "Which of these is a factor governing barrier effect of roads?",

        option1: "traffic intensity",
        option2: "speed of vehicles",
        option3: "driver sensitivity",
        option4: "all of the above",

        answer: 3,
      },
      {
        question:
          "'The ability to produce a good using fewer inputs than another producer' is",

        option1: "comparative advantage",
        option2: "absolute advantage",
        option3: "production advantage",
        option4: "resource advantage",

        answer: 1,
      },
      {
        question:
          "Which of these is/are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",

        option1: "bridge underpass",
        option2: "box culverts",
        option3: "pipe culverts",
        option4: "all of these",

        answer: 3,
      },
      {
        question: "Bhilai can be best categorised as",

        option1: "administrative town",
        option2: "industrial town",
        option3: "transport town",
        option4: "commercial town",

        answer: 1,
      },
      {
        question: "Singrauli can be best categorised as",

        option1: "mining town",
        option2: "garrison town",
        option3: "educational town",
        option4: "religious town",

        answer: 0,
      },
      {
        question:
          "'The price of a good that prevails in the world market for that good' is the definition of",

        option1: "export price",
        option2: "import price",
        option3: "world price",
        option4: "domestic price",

        answer: 2,
      },
      {
        question:
          "'The conditions determined by physical, social, economic and environmental factors or processes which increase the susceptibility of an individual, a community, assets or systems to the impacts of hazards' is a definition for",

        option1: "hazard",
        option2: "exposure",
        option3: "vulnerability",
        option4: "disaster",

        answer: 2,
      },
      {
        question:
          "'The combination of all the strengths, attributes and resources available within an organisation, community or society to manage and reduce disaster risks and strengthen resilience' is a definition for",

        option1: "contingency",
        option2: "disaster management",
        option3: "vulnerability",
        option4: "capacity",

        answer: 3,
      },
      {
        question:
          "'The value derived from the knowledge of use of resources by others in the current generation' is called",

        option1: "altruistic value",
        option2: "bequest value",
        option3: "existence value",
        option4: "option value",

        answer: 0,
      },
      {
        question: "IMU stands for",

        option1: "imperial metering unit",
        option2: "inertial metering unit",
        option3: "imperial measurement unit",
        option4: "inertial measurement unit",

        answer: 3,
      },
      {
        question: "The frequency of flyovers is an indicator of",

        option1: "spatial resolution",
        option2: "temporal resolution",
        option3: "spectral resolution",
        option4: "radiometric resolution",

        answer: 1,
      },
      {
        question:
          "'The situation of people, infrastructure, housing, production capacities and other tangible human assets located in hazard-prone areas' is a definition for",

        option1: "hazard",
        option2: "exposure",
        option3: "vulnerability",
        option4: "disaster",

        answer: 1,
      },
      {
        question:
          "'A process, phenomenon or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation' is a definition for",

        option1: "hazard",
        option2: "exposure",
        option3: "vulnerability",
        option4: "disaster",

        answer: 0,
      },
      {
        question: "Which of these uses imputed willingness to pay?",

        option1: "market price method",
        option2: "replacement cost method",
        option3: "travel cost method",
        option4: "contingent valuation method",

        answer: 1,
      },
      {
        question:
          "The time of flight of LiDAR is 0.00001 sec. Find the distance of the object from the instrument",

        option1: "500m",
        option2: "1000m",
        option3: "1500m",
        option4: "2000m",

        answer: 2,
      },
      {
        question:
          "'A serious disruption of the functioning of a community or a society at any scale due to hazardous events interacting with conditions of exposure, vulnerability and capacity, leading to one or more of the following: human, material, economic and environmental losses and impacts' is a definition for",

        option1: "hazard",
        option2: "exposure",
        option3: "vulnerability",
        option4: "disaster",

        answer: 3,
      },
    ];
    setAllQuestoins(staticQuestions);
  }, []);

  let [index, setIndex] = useState(0);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [start, setStart] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_array = [option1, option2, option3, option4];

  const callToast = (type, message) => {
    toast[type](message, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const checkAns = (ele, ans) => {
    if (lock === false) {
      if (allQuestions[index].answer === ans) {
        callToast("success", "Correct Answer!");
        setScore((prev) => prev + 1);
        ele.target.classList.add("correct");
      } else {
        callToast("error", "Wrong Answer!");
        ele.target.classList.add("wrong");
        option_array[allQuestions[index].ans - 1].current.classList.add(
          "correct"
        );
      }
      setLock(true);
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === allQuestions.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      //setQuestion(allQuestions[index])
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    } else {
      callToast("warn", "Please Select An Option!");
    }
  };

  const reset = () => {
    setIndex(0);
    //setQuestion(allQuestions[0])
    setScore(0);
    setLock(false);
    setResult(false);
  };

  const startQuiz = () => {
    setStart(true);
  };

  return (
    <div className="quizContainer">
      <h1>NPTEL -Conservation kuch toh kuch toh</h1>
      <hr />
      {start ? (
        result ? (
          <>
            <h2>
              You Scored {score} out of {allQuestions.length}
            </h2>
            <button onClick={reset} className="btn btn-outline-success">
              Reset
            </button>
          </>
        ) : (
          <>
            {allQuestions && (
              <>
                <h2>
                  {index + 1}. {allQuestions[index].question}
                </h2>
                <ul>
                  <li
                    ref={option1}
                    onClick={(e) => {
                      checkAns(e, 0);
                    }}
                  >
                    {allQuestions[index].option1}
                  </li>
                  <li
                    ref={option2}
                    onClick={(e) => {
                      checkAns(e, 1);
                    }}
                  >
                    {allQuestions[index].option2}
                  </li>
                  <li
                    ref={option3}
                    onClick={(e) => {
                      checkAns(e, 2);
                    }}
                  >
                    {allQuestions[index].option3}
                  </li>
                  <li
                    ref={option4}
                    onClick={(e) => {
                      checkAns(e, 3);
                    }}
                  >
                    {allQuestions[index].option4}
                  </li>
                </ul>
                <button onClick={next} className="btn btn-outline-primary">
                  Next
                </button>
                <div className="index">
                  {index + 1} of {allQuestions.length} questions
                </div>
              </>
            )}
          </>
        )
      ) : (
        <>
          <p>
            HEHE
            <br />
            <strong>Note: </strong>
            Anvesh gae
          </p>
          <button className="btn btn-outline-success" onClick={startQuiz}>
            Start
          </button>
        </>
      )}
    </div>
  );
};

export default Quiz;
