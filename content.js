const q_images = {
	q1: {
		img:"1.png",
		alt: "A blob looking nervously at their phone."
		},
	q2: {
		img:"2.png",
		alt: "A blob staring at a pile of dirty clothes."
		},
	q3: {
		img:"3.png",
		alt: "A blob listening to music through earbuds."
		},
	q4: {
		img:"4.png",
		alt: "An illustration of a river running through a park."
		},
	q5: {
		img:"5.png",
		alt: "A blob and dog wearing matching sweaters."
		},
	q6: {
		img:"6.png",
		alt: "A blob sweating profusely."
		},
	q7: {
		img:"7.png",
		alt: "A drawing of a clock app screen."
		},
	q8: {
		img:"8.png",
		alt: "Drawings of a blob posing for photos."
		},
	q9: {
		img:"9.png",
		alt: "A drawing of a video website where the search bar says '4 DATES WHY' and the videos displayed are 'Relationship Talk: How did we know?', 'Trying 5000 ice cream flavors', 'My 5 to 9 before and after my 9 to 5', 'In my healing era', 'Music to deter raccoons', and 'Don't miss these 100 dating red flags'."
		},
	q10: {
		img:"10.png",
		alt: "A very loose drawing of a mouse."
		},
	q11: {
		img:"11.png",
		alt: "A blob thinking about love."
		},
	q12: {
		img:"12.png",
		alt: "A bear-shaped honey bottle with hearts coming out of its head."
		},
	q13: {
		img:"13.png",
		alt: "A cartoon blue flower sitting at a table with lunch food."
		},
	q14: {
		img:"14.png",
		alt: "A blob that seems confused about love."
		},
	q15: {
		img:"15.png",
		alt: "Someone about to write a new message on their phone."
		},
	q16: {
		img:"16.png",
		alt: "A cartoon phone about to send a message saying 'sup'."
		},
	q17: {
		img:"17.png",
		alt: "A blob looking in the mirror."
		},
	q18: {
		img:"18.png",
		alt: "A smiling blob."
		},
	q19: {
		img:"19.png",
		alt: "A smiling blob."
		},
	q20: {
		img:"20.png",
		alt: "A blob with an uncertain expression."
		},
	q21: {
		img:"21.png",
		alt: "A blob thinking about what's in their heart and head."
	},
	q22: {
		img:"22.png",
		alt: "A blob in bed staring at the ceiling."
	}
};

const q_descriptions = {
q1: "You got an hour of sleep last night. You went on a fourth date a few days ago and it's been taking them longer to respond than before. \
A rejection is coming any moment now and at this point you just want to get it over with.<br/><br/>\
You flip your phone over. They've finally texted you back. You hold your breath and close your eyes.<br/><br/>\
<i>\"Yay I'm glad the concert was fun!\"<br/>\
\"Hey, I've been thinking about this and...\"<br/>\
\"You are great and...\"<br/><br/></i>\
You hadn't even saved this number yet but you'd allowed yourself to imagine the memories ahead. \
You knew it would hurt to let yourself hope. But it hurts more to not let yourself hope at all, you suppose.<br/><br/>\
You text the nameless number back promptly, ending your reply with:",
q2: "You won't let this stop your morning run. \
One problem: you're out of clean clothes. What do you wear?",
q3: "It's like, what, 7:15AM? Who could you possibly see at this time?<br/><br/>\
You listen to the same song on repeat and let it carry you through the miles. The act of running right now feels like you're:",
q4: "You run through the park where you first met fourth-date-person. \
You wonder what you could've done differently. Was it something you said? Maybe you:",
q5: "That was a long run!! Your weeks-unwashed clothes are soaked. Your eyes sting from the sweat rolling into them. \
As you air out your armpits, you see someone walking in your direction. \
They're wearing a shirt for your favorite football team and so is the dog they're walking. Are they looking at you? <br/><br/>\
Is this...the moment you've been waiting for?<br/><br/>\
The stranger looks at you again and you instinctively look away. You wipe your face. Ahhh!! Why is this happening <i>now</i>?!<br/><br/>\
They're walking past you. What now?",
q6: {
	1: "You look up, but they keep on walking.",
	2: "<i>\"I hope so!\"</i><br/><br/>\
The two of you learn you're from the same hometown.<br/><br/> \
	<i>\"I'm Ev by the way! It's great to meet you.\"</i> You exchange numbers.",
	3: "<i>\"Woof!\"</i> you exclaim in the vague direction of the dog. \
	The person and dog keep on walking without acknowledging you woofed. \
	Not sure if they knew that was a greeting.",
	4: "You're really getting your cardio in!"
},
q7: "You shower and start your laundry. \
You set a timer \
and notice it's 2 AM right now in a city you've never been to. <br/><br/>\
Fourth-date-person went on a work trip a couple weeks ago. \
You'd added the city to your World Clock to know what time it was there. \
It sounded like a hectic trip and you appreciated that they texted you every day anyway. \
Based on the timestamps, they probably texted you back right before bed and first thing in the morning. \
Did it mean they really liked you? Did it mean nothing to them? In any case, it was endearing.<br/><br/>\
You wonder how they felt when you texted them. Was it exciting? Comforting? Meaningless? Nightmare fuel?<br/><br/>\
Anyway. It's over now, and you're not going to be on that continent any time soon. You:",
q8: "Everything is fine. You'll find love. \
You just need to put yourself out there! \
And you may as well refresh your dating profile while this motivation is around.<br/><br/>\
Actually...maybe let's just start with a single photo. You go through your camera roll and many photos feel too precious to throw into \
the void of the app. From the remaining photos, you end up going with:",
q9: "You update the photo and then swipe aimlessly. \
Maybe you don't know what you want. Or maybe you want the wrong things? Are you...the problem?<br/><br/>\
You open your laptop and your photos app sends you a notification. <i>You have a new memory.</i> \
It's your ex and your friends at Fourth-date-person Park. You're not sure why you all ended up there that day, but you remember it being a good time. \
You have mixed feelings about how many memories you have attached to this park now.<br/><br/>\
Your video recommendations have shifted toward dating advice. \
You're not sure what this is doing to your psyche. The video drawing you in today is:",
q10: "You watch the video on 2x speed, wonder what videos the love of your life is getting recommended, and now your laundry is done! \
While emptying the dryer lint trap, you find a ball of fluff that looks like a mouse. \
Your ex would've loved this. You have no idea if fourth-date-person would.",
q11: {
	1: "It really is, isn't it? Life is so good.",
	2: "You send your ex a photo of the mouse fluff ball. They respond immediately. \
	<i>\"A MOUSE!!! This is the best dryer lint animal I've seen all year.\"</i> You smile and move on with your day.",
	3: "If you don't have a romantic interest to share this with, at least you have your entire social network. \
	You upload a photo of the lint ball. <br/><br/>\
	Minutes later, someone replies to your story. It's Amb, a friend's friend's friend who you met at a party months ago. \
	Amb later asked your friend if you were single. This was flattering, but Amb lived a 5-hour flight away. \
	But maybe you're too picky and need to be more open-minded?<br/><br/>\
	<i>\"Hey! Neat photo. What is it though? Hey so I moved to the city last month. Would love to hang out!\"</i><br/><br/>\
	Is this...the second chance you're looking for?",
	4: "Wow, that's very proactive of you! Good thing you know what you're doing, right?<br/><br/>\
	You can't figure it out despite your best efforts. \
	Now you're running late to meet up with your friend and you have to reassemble the dryer at some point. \
	But at least your clothes are clean and dry for now!"
},
q12: "You cross a street that shares its name with fourth-date-person. Was that street always there?<br/><br/>\
Someone's wearing a jersey for your favorite team. You're reminded of morning run stranger and their dog. Is this a sign?<br/><br/>\
The TV at the cafe is set to some news channel and for some reason they're reporting on fourth-date-person's hometown. What is this?!?! <br/><br/>\
You order a coffee. Pouring in milk at the counter, you lock eyes with a bear-shaped honey bottle. \
The bear stares at you, offering you the world.<br/><br/>\
Is this...the love of your life?",
q13: "You picture your sweet, sweet future with Honey Bear. \
Before you visualize your wedding dance, your friend taps your shoulder and greets you.<br/><br/>\
Your friend asks how dating has been going. It's been going! The hardest part right now is:",
q14: "Your friend tells you, earnestly and lovingly, after hearing you met the last person through a dating app, \
that you should try meeting people 'in real life' instead.<br/><br/>\
Your friend pauses. <i>\"I just remembered. I have this friend, Plonk, who wants to get set up. I'm not sure if it's a romantic fit, \
but Plonk is an interesting person so hopefully you both have a good conversation no matter what. I'll throw you two into a group chat if you're open to it?\"</i> You are, in fact, open to it.<br/><br/>\
Is this...the start of the rest of your life?",
q15: "You're still riding the momentum of 'putting yourself out there' \
and decide to ask someone to get dinner before your confidence fades.<br/><br/>\
Hey. Why did fourth-date-person change the topic so quickly when you said you'd been feeling alone in the world lately?<br/><br/>\
Back to your phone. Who do you message?",
q16: "And what do you say?",
q17: "They respond enthusiastically. You decide on a place you've been meaning to check out. \
Great! That's a win no matter how dinner goes.<br/><br/>\
You get ready for the maybe-date (can't be too sure about these things). \
You look in the mirror. You're more self-conscious than you were a few months ago. You change shirts thrice.<br/><br/>\
What will you talk about on this maybe-date? You've been feeling less interesting over time. Maybe \
you're just sick of telling strangers how long you've lived in the city for. But maybe you should practice? You \
start replaying your last first date's transcript in excruciating detail. <i>Hey, so nice to meet you! [Blanks on what their name is]</i> <br/><br/>\
...Let's wince later. Dinner awaits!",
q18: {
	ev: "<i>\"So how did you get into football?\"</i>",
	amb: "<i>\"You have a nice name.\"</i>",
	plonk: "<i>\"I just got out of a five year long relationship.\"</i>"
},
q19: {
	ev: "<i>\"I'm not sure what I do in my free time to be honest!\"</i>",
	amb: "<i>\"Recently I've gotten really into running. It's frustrating though because all I want to do is run as fast as possible. I can't get myself to slow down!\"</i>",
	plonk: "<i>\"If you were a kitchen appliance, what would you be?\"</i>"
},
q20: {
	ev: "<i>\"My dog's name is Bev. I didn't think this through because whenever someone says Bev's name, I think they're talking to me.\"</i>",
	amb: "<i>\"I love cooking for friends. It's so nice to have an excuse to go all out on a huge dinner spread.\"</i>",
	plonk: "<i>\"So how long have you lived in the city for?\"</i>"
},
q21: "Finally, you return home. You can't help but compare this to how fourth-date-person made you feel. But again, it's over! So how did you feel about this dinner?",
q22: "Big day! You're proud of yourself for getting through it. One step at a time.<br/><br/>\
Fourth-date-person hasn't texted you. Of course they haven't. \
But you've been through this before, and you know that though this will hurt, this will eventually pass. \
It feels contradictory, but you have this sinking feeling that everything will be okay.<br/><br/>\
You turn off the lights and stare into the darkness for a while, wondering what comes next. Heart racing, this thought brings you back to the present:"
}; 
const q_choices = {
	q1: {
		choice0: {
			text: "I totally understand! (You don't)",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice1: {
			text: "Sg! (That's the whole text)",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice2: {
			text: "Hope your backpacking trip is great, your mom’s peonies thrive this spring, and your best friend’s husky chihuahua mix has the best birthday known to dog! (You already removed three other specific details)",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice3: {
			text: "And happy new year! (It's October)",
			ra: 1,
			ri: 0,
			sn: 0
		}
	},
	q2: {
		choice0: {
			text: "Something you haven't washed in weeks.",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q3: {
		choice0: {
			text: "Manually processing your feelings.",
			ra: 0,
			ri: 1,
			sn: -1
		},
		choice1: {
			text: "Literally running away from your problems.",
			ra: 0,
			ri: 1,
			sn: 1
		},
		choice2: {
			text: "Turning your thoughts off.",
			ra: 0,
			ri: -1,
			sn: 1
		},
		choice3: {
			text: "Delusional. Why did you think you would enjoy running?!",
			ra: 0,
			ri: -1,
			sn: -1
		}
	},
	q4: {
		choice0: {
			text: "Talked way too much about football.",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice1: {
			text: "Overshared about your fears.",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice2: {
			text: "Made jokes that didn't land the right way.",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice3: {
			text: "Came off pretentious when talking about your recent health kick.",
			ra: 1,
			ri: 0,
			sn: 0
		},
		choice4: {
			text: "Didn't elaborate when asked about where you grew up.",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice5: {
			text: "Laughed too loud.",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice6: {
			text: "Laughed too quietly.",
			ra: -1,
			ri: 0,
			sn: 0
		},
		choice7: {
			text: "Laughed?",
			ra: -1,
			ri: 0,
			sn: 0
		}
	},
	q5: {
		choice0: {
			id: 1,
			text: "Look toward them and see if they say anything.",
			ra: -1,
			ri: 0,
			sn: -1
		},
		choice1: {
			id: 2,
			text: "\"Nice matching shirts! Think we're making the playoffs this year?\"",
			ra: 1,
			ri: 0,
			sn: -1,
			ev: true
		},
		choice2: {
			id: 3,
			text: "\"Woof!\"",
			ra: 1,
			ri: 0,
			sn: 1
		},
		choice3: {
			id: 4,
			text: "Start running again.",
			ra: -1,
			ri: 0,
			sn: 1
		}
	},
	q6: {
		choice0: {
			text: "Head back home",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q7: {
		choice0: {
			text: "Delete the city—you don't want to be reminded of this.",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice1: {
			text: "Delete the city—this info is useless.",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice2: {
			text: "Passively keep the city—you'll figure this out later.",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice3: {
			text: "Actively keep the city—this is the souvenir for your four dates.",
			ra: 0,
			ri: 1,
			sn: 0
		}
	},
	q8: {
		choice0: {
			text: "Some photo your friends all agree is good.",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice1: {
			text: "A picture you like but no one else has given feedback on.",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice2: {
			text: "A photo that your friends universally agree is unflattering, but you like the photo.",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice3: {
			text: "A selfie you take in this very moment.",
			ra: 0,
			ri: -1,
			sn: 0
		}
	},
	q9: {
		choice0: {
			text: "NO MORE SITUATIONSHIPS! 10 Rules To Change Your Life",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice1: {
			text: "CHEMISTRY or COMPATIBILITY? (Powerful Mindset Shift)",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice2: {
			text: "I'm just not into them. Can the feeling change?",
			ra: 0,
			ri: 1,
			sn: 0
		},
		choice3: {
			text: "Do THIS to make them want you. 5 SUBTLE TIPS",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice4: {
			text: "THIS is why they NEVER TEXT YOU BACK! Do THIS instead",
			ra: 0,
			ri: -1,
			sn: 0
		},
		choice5: {
			text: "Why Haven't I Met Someone Yet?",
			ra: 0,
			ri: 1,
			sn: 0
		}
	},
	q10: {
		choice0: {
			id: 1,
			text: "Cute!",
			ra: 0,
			ri: 0,
			sn: 0
		},
		choice1: {
			id: 2,
			text: "Message your ex",
			ra: 0,
			ri: 0,
			sn: 0
		},
		choice2: {
			id: 3,
			text: "Take a photo and upload it to your story",
			ra: 0,
			ri: 0,
			sn: 0,
			amb: true
		},
		choice3: {
			id: 4,
			text: "Dismantle the dryer to figure out how this happened",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q11: {
		choice0: {
			text: "Head to the cafe for lunch",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q12: {
		choice0: {
			text: "Yes",
			ra: 0,
			ri: 0,
			sn: 1
		},
		choice1: {
			text: "No",
			ra: 0,
			ri: 0,
			sn: -1,
			nohoneybear: true
		}
	},
	q13: {
		choice0: {
			text: "How out of your control this process feels.",
			ra: 0,
			ri: -1,
			sn: 1
		},
		choice1: {
			text: "How much you worry about what's wrong with you.",
			ra: 0,
			ri: 1,
			sn: 1
		},
		choice2: {
			text: "How much time and energy this is taking from your life.",
			ra: 0,
			ri: -1,
			sn: -1
		},
		choice3: {
			text: "Not trusting your judgment.",
			ra: 0,
			ri: 1,
			sn: -1
		},
		choice4: {
			text: "How self-conscious you've become.",
			ra: 0,
			ri: -1,
			sn: 1
		},
		choice5: {
			text: "How disappointing it is when things don't work out.",
			ra: 0,
			ri: 1,
			sn: 1
		},
		choice6: {
			text: "Having to face rejection over and over again.",
			ra: 0,
			ri: -1,
			sn: -1
		},
		choice7: {
			text: "Having the courage to end things.",
			ra: 0,
			ri: 1,
			sn: -1
		}
	},
	q14: {
		choice0: {
			text: "Nice to meet you, Plonk!",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q15: {
		choice0: {
			text: "Ev",
			ra: 0,
			ri: 0,
			sn: 0
		},
		choice1: {
			text: "Amb",
			ra: 0,
			ri: 0,
			sn: 0
		},
		choice2: {
			text: "Plonk",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q16: {
		choice0: {
			text: "Would you like to get dinner tonight? No worries if not!!! Sorry this is so last minute!!",
			ra: -1,
			ri: 0,
			sn: 1
		},
		choice1: {
			text: "Hey are you free for dinner tonight? Any time after 6 works for me. What time works best for you? Do you have any places you've been meaning to try? If not I have a list! ",
			ra: 1,
			ri: 0,
			sn: 1
		},
		choice2: {
			text: "din at 6 ?",
			ra: -1,
			ri: 0,
			sn: -1
		},
		choice3: {
			text: "Hey! Will you marry me? But before that, dinner?",
			ra: 1,
			ri: 0,
			sn: -1
		}
	},
	q17: {
		choice0: {
			text: "Prepare to talk about how long you've lived in the city for",
			ra: 0,
			ri: 0,
			sn: 0
		}
	},
	q18: {
		ev: {
			choice0: {
				text: "I can't remember. What about you?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "Oh, you know, I just grew up with it. But what keeps me going? Let's see...",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "It's great to have something to talk to people about.",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		amb: {
			choice0: {
				text: "Thanks!",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "What about it?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Really?",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		plonk: {
			choice0: {
				text: "Wow!",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "Thank you for sharing that with me. How has it been going? How have you been feeling about that?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "What was that like?",
				ra: 0,
				ri: 0,
				sn: 0
			}
		}
	},
	q19: {
		ev: {
			choice0: {
				text: "Walk me through a day in your life!",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "Oh, really?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "I feel the same way!",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		amb: {
			choice0: {
				text: "I totally feel you.",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "What do you think makes you feel that way?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "I truly cannot relate!",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		plonk: {
			choice0: {
				text: "Sometimes I think I look like a spoon.",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "First, let's align on what counts as a kitchen appliance.",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Are you interviewing me?",
				ra: 0,
				ri: 0,
				sn: 0
			}
		}
	},
	q20: {
		ev: {
			choice0: {
				text: "Where did the name Bev come from?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "Have you considered changing your name?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Bev!",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		amb: {
			choice0: {
				text: "What do you like to cook?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "How is it different cooking for friends versus cooking for yourself?",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "Does that get expensive?",
				ra: 0,
				ri: 0,
				sn: 0
			}
		},
		plonk: {
			choice0: {
				text: "I've been here for a while now. How many years has it been? Let's see...",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice1: {
				text: "Well, TECHNICALLY, when I first moved here, I lived one block beyond the city limits. So let's think for a bit...",
				ra: 0,
				ri: 0,
				sn: 0
			},
			choice2: {
				text: "AAAAAAHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
				ra: 0,
				ri: 0,
				sn: 0
			}
		}
	},
	q21: {
		choice0: {
			text: "You knew, seconds into dinner, how you felt.",
			ra: 0,
			ri: 1,
			sn: -1
		},
		choice1: {
			text: "You're not totally sure, but you have an initial gut feeling.",
			ra: 0,
			ri: 1,
			sn: 1
		},
		choice2: {
			text: "You need to evaluate this date against your checklist to know.",
			ra: 0,
			ri: -1,
			sn: -1
		},
		choice3: {
			text: "How would you know after one date?",
			ra: 0,
			ri: -1,
			sn: 1
		}
	},
	q22: {
		choice0: {
			text: "I'll look back on this time of my life fondly.",
			ra: -1,
			ri: 1,
			sn: 0
		},
		choice1: {
			text: "The possibilities make life more exciting.",
			ra: 1,
			ri: 1,
			sn: 0
		},
		choice2: {
			text: "Even if nothing ever works out, at least I'll know I tried.",
			ra: -1,
			ri: -1,
			sn: 0
		},
		choice3: {
			text: "It just takes one.",
			ra: 1,
			ri: -1,
			sn: 0
		},
		choice4: {
			text: "I'm learning about myself.",
			ra: -1,
			ri: 1,
			sn: 0
		},
		choice5: {
			text: "I'm proud of myself.",
			ra: 1,
			ri: 1,
			sn: 0
		},
		choice6: {
			text: "At least this is plot progression.",
			ra: -1,
			ri: -1,
			sn: 0
		},
		choice7: {
			text: "This isn't everything.",
			ra: 1,
			ri: -1,
			sn: 0
		}
	}
};

const result_profiles = {
	rrs: {
		when: "you feel at peace",
		name: "Worried Blue Flower",
		img: "blueflower.png",
		alt: "A cartoon blue flower",
		attr1: "Uses the same mug every day",
		attr2: "Talks about their interests using a ton of jargon without realizing it",
		attr3: "Fine with doing a year of long distance one week into making it official",
		how: "You and someone else in a friend's wedding party are from the same hometown and now live in the same neighborhood. Coincidence or fate? 💘",
		miss: "You hit it off with someone before boarding your flight but they live on a different continent. You figure this doesn't make logistical sense and don't exchange any contact info 😢",
		opposite: "Worried Brown Square",
		oppositeimg: "brownsquare.png"
	},
	rrn: {
		when: "they make you laugh",
		name: "Worried Orange Circle",
		img: "orangecircle.png",
		alt: "A cartoon orange circle",
		attr1: "Notices when the walls get painted a slightly lighter shade of white",
		attr2: "Doesn't order the thing on the menu if they don't know how to pronounce it",
		attr3: "Knows exactly what the internet would think about their current romantic situation",
		how: "Changing your dating app location while travelling actually works out 💘",
		miss: "You and a friend have mutual romantic interest in each other. Neither of you realizes it and then one of you moves away 😢",
		opposite: "Worried Green Blob",
		oppositeimg: "greenblob.png"
	},
	ris: {
		when: "you want to talk about yourself",
		name: "Worried Yellow Star",
		img: "yellowstar.png",
		alt: "A cartoon yellow star",
		attr1: "Formats spreadsheets so the text wraps",
		attr2: "So many subscriptions",
		attr3: "Their friends are like  'you've been dating this person for 2 years and this is the first I'm hearing of them??'",
		how: "You've known of this person for years but don't know them well. Finally, you both end up in the same car for a long drive and enjoy each other's company 💘",
		miss: "Your friend's friend shows interest but it feels too close to home 😢",
		opposite: "Worried Red Trapezoid",
		oppositeimg: "redtrapezoid.png"
	},
	rin: {
		when: "you can't wait to tell them what happened today",
		name: "Worried Pink Triangle",
		img: "pinktriangle.png",
		alt: "A cartoon pink triangle",
		attr1: "Camera roll overflowing with screenshots to send to friends",
		attr2: "Looks out at the rolling hills and thinks everything is going to be ok",
		attr3: "Gifts a croissant on the second date but feels bad for not checking for food allergies and says no pressure to actually eat this",
		how: "The person next to you on the train is reading the same book you're reading right now. You take your copy out and read conspicuously. They notice and comment on this coincidence 💘",
		miss: "You meet someone at an event. They don't text you and you think you may as well not initiate if they're not interested 😢",
		opposite: "Worried Purple Hexagon",
		oppositeimg: "purplehexagon.png"
	},
	ars: {
		when: "they get your jokes",
		name: "Worried Purple Hexagon",
		img: "purplehexagon.png",
		alt: "A cartoon purple hexagon",
		attr1: "Great soup recipes with adjustable macros",
		attr2: "On principle, bed is either always made or never made",
		attr3: "After meeting someone and feeling excited about the connection, spends the evening asking why 100 times until an acceptable logical answer is found",
		how: "Someone DMs your hobby account. You meet up after a week of discussion about your shared interest 💘",
		miss: "So relieved after solving a puzzle at the museum with a stranger that you don't stay longer to talk to them 😢",
		opposite: "Worried Pink Triangle",
		oppositeimg: "pinktriangle.png"
	},
	arn: {
		when: "the world feels brighter",
		name: "Worried Red Trapezoid",
		img: "redtrapezoid.png",
		alt: "A cartoon red trapezoid",
		attr1: "After-work plans with three different groups on a Tuesday (pre-dinner, dinner, post-dinner)",
		attr2: "Has the best finds when thrifting",
		attr3: "Can't stop themselves from asking 'what is this' early on",
		how: "Telling the person in front of you in line that you like their hair 💘",
		miss: "You get caught up in telling a story. You don't notice the stranger wearing the same shirt as you from a tour your favorite artist did 8 years ago 😢",
		opposite: "Worried Yellow Star",
		oppositeimg: "yellowstar.png"
	},
	ais: {
		when: "the thoughts and ideas are endless",
		name: "Worried Green Blob",
		img: "greenblob.png",
		alt: "A cartoon green blob",
		attr1: "Watches TV in the language they're trying to learn",
		attr2: "Forgets friend's birthday until the end of the day even though they planned the (very elaborate) birthday party",
		attr3: "Double texts without worrying about it",
		how: "Texting a phone number someone left in a library book 💘",
		miss: "Not meeting the love of your life at a cafe one fateful day. The day before, you committed to going caffeine-free 😢",
		opposite: "Worried Orange Circle",
		oppositeimg: "orangecircle.png"
	},
	ain: {
		when: "you feel seen",
		name: "Worried Brown Square",
		img: "brownsquare.png",
		alt: "A cartoon brown square",
		attr1: "Should wash their water bottle",
		attr2: "Too many keychains, not enough items to hang them on",
		attr3: "Can't commit to a favorite color but willing to jump into a relationship as soon as something feels promising",
		how: "Going on a hike with a friend's friends. One of them is especially attentive when you talk at length about your latest thoughts 💘",
		miss: "Not talking to the person you make eye contact with at the grocery store 3 times in the same visit 😢",
		opposite: "Worried Blue Flower",
		oppositeimg: "blueflower.png"
	}
}