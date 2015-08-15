$(document).ready(function () {
  
    document.addEventListener("deviceready", onDeviceReady, false);
  
    function onDeviceReady() {
            adbuddiz.setAndroidPublisherKey("af553a44-577b-4a89-a511-b57db8c1d0e3");
            adbuddiz.cacheAds();
          }
  
  
    var presList = [
        ["George Washington", "Independent", "2/22/1732", "Virginia", "On April 30, 1789, George Washington, standing on the balcony of Federal Hall on Wall Street in New York, took his oath of office as the first President of the United States."],
        ["John Adams", "Federalist", "10/30/1735", "Massachusetts", "John Adams, a remarkable political philosopher, served as the second President of the United States (1797-1801), after serving as the first Vice President under President George Washington. "],
        ["Thomas Jefferson", "Democratic-Republican", "4/13/1743", "Virginia", "Thomas Jefferson, a spokesman for democracy, was an American Founding Father, the principal author of the Declaration of Independence (1776), and the third President of the United States (1801–1809)."],
        ["James Madison", "Democratic-Republican", "3/16/1751", "Virginia", "James Madison, America's fourth President (1809-1817), made a major contribution to the ratification of the Constitution by writing The Federalist Papers, along with Alexander Hamilton and John Jay. In later years, he was referred to as the \"Father of the Constitution.\""],
        ["James Monroe", "Democratic-Republican", "4/28/1758", "Virginia", "James Monroe was the fifth President of the United States (1817–1825) and the last President from the Founding Fathers."],
        ["John Quincy", "Democratic-Republican", "7/11/1767", "Massachusetts", "John Quincy Adams, son of John and Abigail Adams, served as the sixth President of the United States from 1825 to 1829. A member of multiple political parties over the years, he also served as a diplomat, a Senator, and a member of the House of Representatives. "],
        ["Andrew Jackson", "Democrat", "3/15/1767", "Tennessee", "Andrew Jackson was the seventh President of the United States from 1829 to 1837, seeking to act as the direct representative of the common man."],
        ["Martin Van Buren", "Democrat", "12/5/1782", "New York", "Martin Van Buren was the eighth President of the United States (1837-1841), after serving as the eighth Vice President and the tenth Secretary of State, both under President Andrew Jackson. While the country was prosperous when the \"Little Magician\" was elected, less than three months later the financial panic of 1837 punctured the prosperity."],
        ["William H. Harrison", "Whig", "2/9/1773", "Ohio", "William Henry Harrison, an American military officer and politician, was the ninth President of the United States (1841), the oldest President to be elected at the time. On his 32nd day, he became the first to die in office, serving the shortest tenure in U.S. Presidential history."],
        ["John Tyler", "Whig", "3/29/1790", "Virginia", "John Tyler became the tenth President of the United States (1841-1845) when President William Henry Harrison died in April 1841. He was the first Vice President to succeed to the Presidency after the death of his predecessor."],
        ["James K. Polk", "Democrat", "11/2/1795", "Tennessee", "Often referred to as the first \"dark horse,\" James K. Polk was the 11th President of the United States from 1845 to 1849, the last strong President until the Civil War."],
        ["Zachary Taylor", "Whig", "11/24/1784", "Louisiana", "Zachary Taylor, a general and national hero in the United States Army from the time of the Mexican-American War and the War of 1812, was elected the 12th U.S. President, serving from March 1849 until his death in July 1850."],
        ["Millard Fillmore", "Whig", "1/7/1800", "New York", "Millard Fillmore, a member of the Whig party, was the 13th President of the United States (1850-1853) and the last President not to be affiliated with either the Democratic or Republican parties."],
        ["Franklin Pierce", "Democrat", "11/23/1804", "New Hampshire", "Franklin Pierce became 14th President of the United States at a time of apparent tranquility (1853-1857). By pursuing the recommendations of southern advisers, Pierce -- a New Englander -- hoped to ease the divisions that led eventually to Civil War."],
        ["James Buchanan", "Democrat", "4/23/1791", "Pennsylvania", "James Buchanan, the 15th President of the United States (1857-1861), served immediately prior to the American Civil War. He remains the only President to be elected from Pennsylvania and to remain a lifelong bachelor."],
        ["Abraham Lincoln", "Republican", "2/12/1809", "Illinois", "Abraham Lincoln became the United States' 16th President in 1861, issuing the Emancipation Proclamation that declared forever free those slaves within the Confederacy in 1863."],
        ["Andrew Johnson", "Democrat", "12/29/1808", "Tennessee", "With the assassination of President Abraham Lincoln, Andrew Johnson became the 17th President of the United States (1865-1869), an old-fashioned southern Jacksonian Democrat of pronounced states' rights views."],
        ["Ulysses S. Grant", "Republican", "4/27/1822", "Illinois", "In 1865, as commanding general, Ulysses S. Grant led the Union Armies to victory over the Confederacy in the American Civil War. As an American hero, Grant was later elected the 18th President of the United States (1869–1877), working to implement Congressional Reconstruction and to remove the vestiges of slavery."],
        ["Rutherford B. Hayes", "Republican", "10/4/1822", "Ohio", "As the 19th President of the United States (1877-1881), Rutherford B. Hayes oversaw the end of Reconstruction, began the efforts that led to civil service reform, and attempted to reconcile the divisions left over from the Civil War."],
        ["James A. Garfield", "Republican", "11/19/1831", "Ohio", "James Garfield was elected as the United States' 20th President in 1881, after nine terms in the U.S. House of Representatives. His Presidency was impactful, but cut short after 200 days when he was assassinated."],
        ["Chester A. Arthur", "Republican", "10/5/1829", "New York", "The son of a Baptist preacher who had emigrated from northern Ireland, Chester A. Arthur was America's 21st President (1881-85), succeeding President James Garfield upon his assassination."],
        ["Grover Cleveland", "Democrat", "3/18/1837", "New York", "The first Democrat elected after the Civil War in 1885, our 22nd and 24th President Grover Cleveland was the only President to leave the White House and return for a second term four years later (1885-1889 and 1893-1897)."],
        ["Benjamin Harrison", "Republican", "8/20/1833", "Indiana", "Benjamin Harrison was the 23rd President of the United States from 1889 to 1893, elected after conducting one of the first \"front-porch\" campaigns by delivering short speeches to delegations that visited him in Indianapolis."],
        ["Grover Cleveland", "Democrat", "3/18/1837", "New York", "The first Democrat elected after the Civil War in 1885, our 22nd and 24th President Grover Cleveland was the only President to leave the White House and return for a second term four years later (1885-1889 and 1893-1897)."],
        ["William McKinley", "Republican", "1/29/1843", "Ohio", "William McKinley was the 25th President of the United States, serving from March 4, 1897, until his assassination on September 14, 1901, after leading the nation to victory in the Spanish-American War and raising protective tariffs to promote American industry."],
        ["Theodore Roosevelt", "Republican", "10/27/1858", "New York", "With the assassination of President William McKinley, Theodore Roosevelt, not quite 43, became the 26th and youngest President in the Nation's history (1901-1909). He brought new excitement and power to the office, vigorously leading Congress and the American public toward progressive reforms and a strong foreign policy."],
        ["William H. Taft", "Republican", "9/15/1857", "Ohio", "William Howard Taft was elected the 27th President of the United States (1909-1913) and later became the tenth Chief Justice of the United States (1921-1930), the only person to have served in both of these offices."],
        ["Woodrow Wilson", "Democrat", "12/28/1856", "New Jersey", "Woodrow Wilson, a leader of the Progressive Movement, was the 28th President of the United States (1913-1921). After a policy of neutrality at the outbreak of World War I, Wilson led America into war in order to \"make the world safe for democracy.\""],
        ["Warren G. Harding", "Republican", "11/2/1865", "Ohio", "Warren G. Harding, an Ohio Republican, was the 29th President of the United States (1921-1923). Though his term in office was fraught with scandal, including Teapot Dome, Harding embraced technology and was sensitive to the plights of minorities and women."],
        ["Calvin Coolidge", "Republican", "7/4/1872", "Massachusetts", "As America's 30th President (1923-1929), Calvin Coolidge demonstrated his determination to preserve the old moral and economic precepts of frugality amid the material prosperity which many Americans were enjoying during the 1920s era."],
        ["Herbert Hoover", "Republican", "8/10/1874", "California", "Before serving as America's 31st President from 1929 to 1933, Herbert Hoover had achieved international success as a mining engineer and worldwide gratitude as \"The Great Humanitarian\" who fed war-torn Europe during and after World War I."],
        ["Franklin D. Roosevelt", "Democrat", "1/30/1882", "New York", "Assuming the Presidency at the depth of the Great Depression as our 32nd President (1933-1945), Franklin D. Roosevelt helped the American people regain faith in themselves."],
        ["Harry S. Truman", "Democrat", "5/8/1884", "Missouri", "During his few weeks as Vice President, Harry Truman scarcely saw President Franklin Roosevelt, and received no briefing on the development of the atomic bomb or the unfolding difficulties with Soviet Russia. Suddenly these and a host of other wartime problems became Truman's to solve when, on April 12, 1945, he became America's 33rd President."],
        ["Dwight D. Eisenhower", "Republican", "10/14/1890", "New York", "Bringing to the Presidency his prestige as commanding general of the victorious forces in Europe during World War II, Dwight D. Eisenhower obtained a truce in Korea and worked incessantly during his two terms (1953-1961) to ease the tensions of the Cold War."],
        ["John F. Kennedy", "Democrat", "5/29/1917", "Massachusetts", "John F. Kennedy was the 35th President of the United States (1961-1963), the youngest man elected to the office. On November 22, 1963, when he was hardly past his first thousand days in office, JFK was assassinated in Dallas, Texas, becoming also the youngest President to die."],
        ["Lyndon B. Johnson", "Democrat", "8/27/1908", "Texas", "In the 1960 campaign, Lyndon B. Johnson was elected Vice President as John F. Kennedy's running mate. On November 22, 1963, when Kennedy was assassinated, Johnson was sworn in as the 36th United States President, with a vision to build \"A Great Society\" for the American people."],
        ["Richard M. Nixon", "Republican", "1/9/1913", "California", "Richard Nixon was elected the 37th President of the United States (1969-1974) after previously serving as a U.S. Representative and a U.S. Senator from California. After successfully ending American fighting in Vietnam and improving international relations with the U.S.S.R. and China, he became the only President to ever resign the office, as a result of the Watergate scandal."],
        ["Gerald R. Ford", "Republican", "7/14/1913", "Michigan", "When Gerald R. Ford took the oath of office on August 9, 1974 as our 38th President, he declared, \"I assume the Presidency under extraordinary circumstances...This is an hour of history that troubles our minds and hurts our hearts.\""],
        ["Jimmy Carter", "Democrat", "10/1/1924", "Georgia", "Jimmy Carter served as the 39th President of the United States from 1977 to 1981. He was awarded the 2002 Nobel Peace Prize for work to find peaceful solutions to international conflicts, to advance democracy and human rights, and to promote economic and social development."],
        ["Ronald Reagan", "Republican", "2/6/1911", "California", "Ronald Reagan, originally an American actor and politician, became the 40th President of the United States serving from 1981 to 1989. His term saw a restoration of prosperity at home, with the goal of achieving \"peace through strength\" abroad."],
        ["George H. W. Bush", "Republican", "6/12/1924", "Texas", "George H. W. Bush, as the 41st President (1989-1993), brought to the White House a dedication to traditional American values and a determination to direct them toward making the United States \"a kinder and gentler nation\" in the face of a dramatically changing world."],
        ["Bill Clinton", "Democrat", "8/19/1946", "Arkansas", "Bill Clinton is an American politician from Arkansas who served as the 42nd President of the United States (1993-2001). He took office at the end of the Cold War, and was the first baby-boomer generation President."],
        ["George W. Bush", "Republican", "7/6/1946", "Texas", "George W. Bush, America's 43rd President (2001-2009), was transformed into a wartime President in the aftermath of the airborne terrorist attacks on September 11, 2001, facing the \"greatest challenge of any President since Abraham Lincoln.\""],
        ["Barack H. Obama", "Democrat", "8/4/1961", "Illinois", "Barack Obama is the 44th President of the United States. His story is the American story -- values from the heartland, a middle-class upbringing in a strong family, hard work and education as the means of getting ahead, and the conviction that a life so blessed should be lived in service to others."]
    ];
    
    // Populate #content
    for (i = 0; i < presList.length; i++) {
        
        // add leading zero
        var order;
        if (i < 9) {
            order = "0" + (i + 1)
        } else {
            order = i + 1;
        }
        
        // Party color and categorization
        var pcolor;
        var cat;
        
        if (presList[i][1] === "Democrat") {
            pcolor = "blue";
            cat = "category-1";
        } else if (presList[i][1] === "Republican") {
            pcolor = "red";
            cat = "category-2";
        } else if (presList[i][1] === "Whig") {
            pcolor = "grey";
            cat = "category-3";
        } else if (presList[i][1] === "Independent") {
            pcolor = "purple";
            cat = "category-4";
        } else if (presList[i][1] === "Federalist") {
            pcolor = "green";
            cat = "category-5";
        } else if (presList[i][1] === "Democratic-Republican") {
            pcolor = "orange";
            cat = "category-6";
        }
        
        // Info cards
        $('#content').append(
            "<div id='pres" + order + "' class='infoCard mix z-depth-2 " + pcolor +
                " " + cat + "' data-myorder='" + order + "' " +
                "data-toggle='modal' data-target='#presModal" + i + "'>" +
                "<img class='face' src='./img/" + (i + 1) + ".jpg'>" +
                "<p class='order'>President #" + order + "</p>" +
                "<h4>" + presList[i][0] + "</h4>" +
                "<h6 class='party'>" + presList[i][1] + "</h6><br>" +
            "</div>" +
            
            //<!-- Modal -->
            "<div id='presModal" + i + "' class='modal fade' role='dialog'>" +
              "<div class='modal-dialog'>" +
                //<!-- Modal content-->
                "<div class='modal-content'>" +
                  "<div class='modal-header'>" +
                    "<button type='button' class='close btn-flat " + pcolor + " waves-effect waves-light' " +
                    "data-dismiss='modal'>&times;</button>" +
                    "<h4 class='modal-title'>" + presList[i][0] + "</h4>" +
                    "<span>" + presList[i][3] + "</span> " +
                    "<span>DOB: " + presList[i][2] + "</span>" +
                    "<hr>" +
                  "</div>" +
                  "<div class='modal-body'>" +
                    "<p>" + presList[i][4] + "</p>" +
                    "<img class='flag center-align' src='./img/flags/" + 
                    presList[i][3] + ".png' alt='flag'>" +
                  "</div>" +
                "</div>" +
              "</div>" +
            "</div>" 
            );      
    }
    
    var ads = 0;
    $('.close').click(function(){
      ads++;
      if ((ads % 5) == 0){
        adbuddiz.showAd();
      }
    });
  
  
    // Sorting plugin
    $('#content').mixItUp({
        animation: {
            enable: false,
            effects: 'fade scale',
            queue: true
        },
        callbacks: {
            onMixLoad: function(){
                $(this).mixItUp('setOptions', {
                    animation: {
                        enable: true
                    },
                });
            }
        }
    });
    
    // Dorpdown menus
    $('.dropdown-button').dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false, // Does not change width of dropdown
        hover: false, // Activate on hover
        gutter: 0, // Spacing from edge
        belowOrigin: false // Displays dropdown below the button
    });
    
    // Swipe
    $('#content div').on('swiperight', function () {
        $(this).animate({
            marginLeft: '1000px',
            opacity: '0.1'
            }, 'slow').hide(10);
        $(this).animate({  // reset
            marginLeft: '5px',
            opacity: '1'
            });
    });  
    // Swipe
    $('#content div').on('swipeleft', function () {
        $(this).animate({
            marginRight: '1000px',
            opacity: '0.1'
            }, 'slow').hide(10);
        $(this).animate({  // reset
            marginRight: '5px',
            opacity: '1'
            });
    });
    
    // Ensure show all
    $('#showAll').click(function(){
      $('.infoCard').css("display", "inline-block");
    });
    
    // Credits
    $('#headline').click(function(){
        Materialize.toast('Created by Marlon Clark <br> Using Materialize, MixItUp, and JQuery. Images from Wikipedia.', 5000);
    });
    
    // Instructions
    Materialize.toast('Tap cards to see more info; swipe left or right to temporarily dismiss.', 5000);

    // Scroll to top
    if ($('#back-to-top').length) {
        var scrollTrigger = 350, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
    
});