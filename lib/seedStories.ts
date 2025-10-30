export type SeedStory = {
    id: string; title: string; author: string;
    tags: string[]; excerpt: string; content: string; date: string;
    coverImage?: string;
  };
  
  export const SEED_STORIES: SeedStory[] = [
    {
      id: "the-room-without-reflections",
      title: "The Room Without Reflections",
      author: "Anonymous",
      tags: ["paranormal","short"],
      excerpt: "I looked into the mirror—and nothing looked back.",
      content: `[WRITE YOUR STORY HERE - The Room Without Reflections]

I looked into the mirror—and nothing looked back.

Start writing your story content here. This is a multi-paragraph placeholder where you can craft your tale. Write as much or as little as you need.

Each paragraph will be displayed with proper spacing and formatting. The prose style is already set up to look great for storytelling.

You can write multiple paragraphs, include dialogue, and create suspense. This is your canvas to tell the story of what happened in that mirrorless room.

Keep writing until the story is complete. The navigation at the bottom will let readers move to the next story when they're done reading.`,
      date: "2025-10-27",
    },
    {
      id: "the-rake",
      title: "The Rake",
      author: "Brian Somerville",
      tags: ["creepypasta","creature","paranormal","horror","urban-legend"],
      excerpt: "During the summer of 2003, events in the northeastern United States involving a strange, human-like creature sparked brief local media interest.",
      content: `During the summer of 2003, events in the northeastern United States involving a strange, human-like creature sparked brief local media interest before an apparent blackout was enacted. Little or no information was left intact, as most online and written accounts of the creature were mysteriously destroyed.

Primarily focused in rural New York state and once found in Idaho, self proclaimed witnesses told stories of their encounters with a creature of unknown origin. Emotions ranged from extremely traumatic levels of fright and discomfort to an almost childlike sense of playfulness and curiosity. While their published versions are no longer on record, the memories remained powerful. Several of the involved parties began looking for answers that year.

In early 2006, the collaboration had accumulated nearly two dozen documents dating between the 12th century and present day, spanning 4 continents. In almost all cases, the stories were identical. I’ve been in contact with a member of this group, and was able to get some excerpts from their upcoming book.

A Mariner's Log: 1691
"He came to me in my sleep. From the foot of my bed, I felt a sensation. He took everything. We must return to England. We shall not come here again at the request of the Rake."

A Journal Entry (translated from Spanish): 1880
"I have experienced the greatest terror. I have experienced the greatest terror. I have experienced the greatest terror. I see his eyes when I close mine. They are hollow. Black. They saw me and pierced me. His wet hand. I will not sleep. His voice (unintelligible text)."

A Suicide Note: 1964
"As I prepare to take my life, I feel it necessary to assuage any guilt or pain I have introduced through this act. It is not the fault of anyone other than him. For once, I awoke and felt his presence. And once, I awoke and saw his form. Once again, I awoke and heard his voice, and looked into his eyes. I cannot sleep without fear of what I might next awake to experience. I cannot ever wake. Goodbye."

Found in the same wooden box were two empty envelopes addressed to William and Rose, and one loose personal letter with no envelope:

"Dearest Linnie,

I have prayed for you. He spoke your name."

From a Witness: 2006
"Three years ago, I had just returned from a trip to Niagara Falls with my family for the 4th of July. We were all very exhausted after a long day of driving, so my husband and I put the kids straight to bed and called it a night.

At about 4am, I woke up thinking my husband had gotten up to use the restroom. I used the moment to steal back the sheets, only to wake him in the process. I apologized and told him I thought he was out of bed. When he turned to face me, he gasped and pulled his feet up from the end of the bed so quickly, his knee almost knocked me out of the bed. He then grabbed me and said nothing.

After adjusting to the dark for a half second, I was able to see what caused the strange reaction. At the foot of the bed, sitting and facing away from us, was what appeared to be a naked man, or a large hairless dog of some sort. Its body position was disturbing and unnatural, as if it had been hit by a car or something. For some reason, I was not instantly frightened by it, but more concerned as to its condition. At this point, I was somewhat under the assumption that we were supposed to help him.

My husband was peering over his arm and knee, tucked into the fetal position, occasionally glancing at me before returning to the creature. In a flurry of motion, it scrambled around the side of the bed, and then crawled quickly in a flailing sort of way right along the covers until it was less than a foot from my husband's face. It was completely silent for about 30 seconds (probably closer to 5, but it seemed like a while), just looking at my husband. It then placed its hand on his knee and ran into the hallway, leading to the kids' rooms.

I screamed and ran for the light switch, planning to stop this thing before it hurt my children. When I got to the hallway, the light from the bedroom was enough to see it crouching and hunched over about 20 feet away. It turned around and looked directly at me, covered in blood. I flipped the switch on the wall and saw my daughter, Clara.

The creature ran down the stairs as my husband and I rushed to help our daughter. She was very badly injured, and spoke only once more in her short life. She said, "he is the Rake".

My husband drove his car into a lake that night while rushing our daughter to the hospital. They did not survive.

Being a small town, news got around pretty quickly. The police were helpful at first, and the local newspaper took a lot of interest as well. However, the story was never published, and the local television news never followed up, either.

For several months, my son Justin and I stayed in a hotel near my parent's house. After we decided to return home, I began looking for answers myself. I eventually located a man in the next town over who had a similar story. We got in contact and talked about our experiences. He knew of two other people in New York who had seen the creature we now referred to as the Rake.

It took the four of us two solid years of hunting on the internet and writing letters to come up with a small collection of what we believe to be accounts of the Rake. None of them gave any details, history, or follow-up. One journal had an entry involving the creature in its first 3 pages, then never mentioned it again. A ship's log explained nothing of the encounter, saying only that they were told to leave by the Rake. That was the last entry in the log.

There were, however, many instances where the creature's visit was one of a series of visits with the same person. Multiple people also mentioned being spoken to, my daughter included. This led us to wonder if the Rake had visited any of us before our last encounter.

I set up a digital recorder near my bed and left it running all night, every night, for two weeks. I would tediously scan through the sounds of me rolling around in my bed each day when I woke up. By the end of the second week, I was quite used to the occasional sound of sleep while blurring through the recording at 8 times the normal speed. It still took almost an hour every day.

On the first day of the third week, I thought I heard something different. What I found was a shrill voice. It was the Rake. I can't listen to it long enough to even begin to transcribe it. I haven't let anyone listen to it yet. All I know is that I've heard it before, and I now believe that it spoke when it was sitting in front of my husband. I don't remember hearing anything at the time, but for some reason, the voice on the recorder immediately brings me back to that moment.

The thoughts that must have gone through my daughter's head make me very upset.

I have not seen the Rake since he ruined my life, but I know that he has been in my room while I slept. I know and fear that one night I'll wake up to see him staring at me."

`,
      date: "2006-07-20",
      coverImage: "/rake.webp",
    },
    {
      id: "the-russian-sleep-experiment",
      title: "The Russian Sleep Experiment",
      author: "Unknown",
      tags: ["creepypasta","psychological-horror","experimental","disturbing","war"],
      excerpt: "Russian researchers in the late 1940s kept five people awake for fifteen days using an experimental gas-based stimulant.",
      content: `Russian researchers in the late 1940s kept five people awake for fifteen days using an experimental gas-based stimulant. They were kept in a sealed environment to carefully monitor their oxygen intake so the gas didn't kill them, since it was toxic in high concentrations. This was before closed circuit cameras, so they had only microphones and five-inch-thick glass porthole-sized windows into the chamber to monitor them. The chamber was stocked with books and cots to sleep on (but no bedding), as well as running water, a toilet, and enough dried food to last all five for over a month.

The test subjects were political prisoners deemed enemies of the state during World War II.

Everything was fine for the first five days; the subjects hardly complained, having been promised (falsely) that they would be freed if they submitted to the test and did not sleep for 30 days. Their conversations and activities were monitored, and it was noted that they continued to talk about increasingly traumatic incidents in their past. The general tone of their conversations took on a darker aspect after the four day mark.

After five days, they started to complain about the circumstances and events that lead them to where they were and started to demonstrate severe paranoia. They stopped talking to each other and began alternately whispering into the microphones and one way mirrored portholes. Oddly, they all seemed to think they could win the trust of the experimenters by turning over their comrades, the other subjects in captivity with them. At first, the researchers suspected this was an effect of the gas itself...

After nine days, the first of them started screaming. He ran the length of the chamber repeatedly, yelling at the top of his lungs for three hours straight, at which point he continued attempting to scream, but was only able to produce occasional squeaks. The researchers postulated that he had physically torn his vocal cords. The most surprising thing about this behavior was how the other captives reacted to it... or rather, didn't react to it. They continued whispering into the microphones until the second of the captives started to scream. The two non-screaming captives took the books apart, smeared page after page with their own feces, and pasted them calmly over the glass portholes. The screaming promptly stopped.

So did the whispering into the microphones.

After three more days passed, the researchers checked the microphones hourly to make sure they were working, since they thought it impossible that no sound could be occurring with five people inside. The oxygen consumption in the chamber indicated that all five must still be alive. In fact, it was the amount of oxygen five people would consume at a very heavy level of strenuous exercise.

On the morning of the 14th day, the researchers did something they said they would not do to get a reaction from the captives; they used the intercom inside the chamber, hoping to provoke any response from the people they were afraid were either dead or vegetables.

They announced: "We are opening the chamber to test the microphones; step away from the door and lie flat on the floor or you will be shot. Compliance will earn one of you your immediate freedom."

To their surprise, they heard a calm voice respond in a single phrase: "We no longer want to be freed."

Debate broke out among the researchers and the military forces funding the research. Unable to provoke any more response using the intercom, it was finally decided to open the chamber at midnight on the fifteenth day.

The chamber was flushed of the stimulant gas and filled with fresh air, and immediately, voices from the microphones began to object. 3 different voices began begging, as if pleading for the life of loved ones, to turn the gas back on. The chamber was opened and soldiers were sent in to retrieve the test subjects. They began to scream louder than ever, and so did the soldiers when they saw what was inside.

Four of the five subjects were still alive, although no one could rightly call the state that any of them in 'life.' The food rations past day five had not been so much as touched. There were chunks of meat from the dead test subject's thighs and chest stuffed into the drain in the center of the chamber, blocking it and allowing four inches of water to accumulate on the floor. Precisely how much of the water on the floor was actually blood was never determined. All four 'surviving' test subjects also had large portions of muscle and skin torn away from their bodies. The destruction of flesh and exposed bone on their finger tips indicated that the wounds were inflicted by hand, not with teeth as the researchers initially thought. Closer examination of the position and angles of the wounds indicated that most, if not all of them, were self-inflicted.

The abdominal organs below the ribcage of all four test subjects had been removed. While the heart, lungs and diaphragm remained in place, the skin and most of the muscles attached to the ribs had been ripped off, exposing the lungs through the ribcage. All the blood vessels and organs remained intact, but had been taken out and laid on the floor, fanning out around the eviscerated but still living bodies of the subjects. The digestive tract of all four could be seen to be working, digesting food. It quickly became apparent that what they were digesting was their own flesh that they had ripped off and eaten over the course of days.

Most of the soldiers were Russian special operatives at the facility, but still, many refused to return to the chamber to remove the test subjects. The subjects themselves continued to scream to be left in the chamber and begged and demanded that the gas be turned back on, lest they fall asleep...

To everyone's surprise, the test subjects put up a fierce fight in the process of being removed from the chamber. One of the Russian soldiers died from having his throat ripped out, and another was gravely injured by having his testicles ripped off and an artery in his leg severed by one of the subject's teeth. Another five of the soldiers lost their lives, if you count the ones that committed suicide in the weeks following the incident.

In the struggle, one of the four living subjects had his spleen ruptured and bled out almost immediately. The medical researchers attempted to sedate him, but this proved impossible. He was injected with more than ten times the human dose of a morphine derivative and still fought like a cornered animal, breaking the ribs and arm of one doctor. His heart was seen to beat for a full two minutes after he had bled out, to the point there was more air in his vascular system than blood. Even after it stopped, he continued to scream and flail for another three minutes, struggling to attack anyone in reach and just repeating the word "MORE" over and over, weaker and weaker, until he finally fell silent.

The surviving three test subjects were heavily restrained and moved to a medical facility, the two with intact vocal cords continuously begging for the gas, demanding to be kept awake...

The most injured of the three was taken to the only surgical operating room that the facility had. In the process of preparing the subject to have his organs placed back within his body, it was found that he was effectively immune to the sedative they had given him to prepare him for the surgery. He fought furiously against his restraints when the anesthetic gas was brought out to put him under. He managed to tear most of the way through a four-inch-wide leather strap on one wrist, even through the weight of a 200 pound soldier holding that wrist. It took only a little more anesthetic than normal to put him under, and the instant his eyelids fluttered and closed, his heart stopped.

In the autopsy of the test subject that died on the operating table, it was found that his blood had triple the normal level of oxygen. The muscles that were still attached to his skeleton were badly torn, and he had broken 9 bones in his struggle to not be subdued. Most of them were from the force his own muscles had exerted on them.

The second survivor had been the first of the group of five to start screaming. His vocal cords destroyed, he was unable to beg or object to surgery, and he only reacted by shaking his head violently in disapproval when the anesthetic gas was brought near him. He shook his head yes when someone suggested, reluctantly, that they should try the surgery without anesthetic, and did not react for the entire six hour procedure of replacing his abdominal organs and attempting to cover them with what remained of his skin. The surgeon presiding stated repeatedly that it should not be medically possible for the patient to still be alive. One terrified nurse assisting the surgery stated that she had seen the patients mouth curl into a smile several times, whenever his eyes met hers.

When the surgery ended, the subject looked at the surgeon and began to wheeze loudly, attempting to talk while struggling. Assuming this must be something of drastic importance, the surgeon had a pen and pad fetched so the patient could write his message. It was simple. "Keep cutting."

The other two test subjects were given the same surgery, both without anesthetic as well (although they had to be injected with a paralytic for the duration of the operation). The surgeon found it impossible to perform the operation while the patients laughed continuously. Once paralyzed, the subjects could only follow the attending researchers with their eyes. The paralytic cleared their system in an abnormally short period of time, and they were soon trying to escape their bonds. The moment they could speak, they were again asking for the stimulant gas.

The researchers tried asking why they had injured themselves, why they had ripped out their own guts, and why they wanted to be given the gas again. Only one response was given: "I must remain awake."

All three subject's restraints were reinforced and they were placed back into the chamber, awaiting determination as to what should be done with them. The researchers, facing the wrath of their military 'benefactors' for having failed the stated goals of their project, considered euthanizing the surviving subjects. The commanding officer, an ex-KGB, instead saw potential, and wanted to see what would happen if they were put back on the gas. The researchers strongly objected, but were overruled.

In preparation for being sealed in the chamber again, the subjects were connected to an EEG monitor and had their restraints padded for long term confinement. To everyone's surprise, all three stopped struggling the moment it was let slip that they were going back on the gas. It was obvious that, at this point, all three were putting up a great struggle to stay awake. One of the subjects that could speak was humming loudly and continuously; the mute subject was straining his legs against the leather bonds with all his might, first left, then right, then left again for something to focus on. The remaining subject was holding his head off his pillow and blinking rapidly. Having been the first to be wired to the EEG machine, most of the researchers were monitoring his brain waves in surprise. They were normal most of the time, but sometimes flatlined inexplicably. It looked as if he were repeatedly suffering brain death, before returning to normal. As they focused on paper scrolling out of the brainwave monitor, only one nurse saw the man's eyes slip shut at the same moment his head hit the pillow. His brainwaves immediately changed to that of deep sleep, then flatlined for the last time as his heart simultaneously stopped.

The only remaining subject that could speak started screaming to be sealed in now. His brainwaves showed the same flatlines as the one who had just died from falling asleep. The commander gave the order to seal the chamber with both subjects inside, as well as three researchers. One of the named three immediately drew his gun and shot the commander point blank between the eyes, then turned the gun on the mute subject and blew his brains out as well.

He pointed his gun at the remaining subject, still restrained to a bed as the remaining members of the medical and research team fled the room. "I won't be locked in here with these things! Not with you!" he screamed at the man strapped to the table. "WHAT ARE YOU?" he demanded. "I must know!" The subject smiled.

"Have you forgotten so easily?" the subject asked. "We are you. We are the madness that lurks within you all, begging to be free at every moment in your deepest animal mind. We are what you hide from in your beds every night. We are what you sedate into silence and paralysis when you go to the nocturnal haven where we cannot tread."

The researcher paused, then aimed at the subject's heart and fired. The EEG flatlined as the subject weakly choked out, "So... nearly... free..."`,
      date: "2009-08-08",
      coverImage: "/russian.png",
    },
  ];
  