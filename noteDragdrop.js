// Denne variabelen determinerer hvorvidt det er tillatt å droppe elementet eller ei.
			var allow = false;
			
			
            function allowDrop(ev) {
				ev.preventDefault();
				
				// Denne if-setningen sjekker om elementet vi forsøker å dra til faktisk er en akseptert beholder.
				switch(ev.toElement.className) {
					case 'DragndroptekstContainer':
					case 'DragndropContainer':
						// Denne if-setningen tar alle childNodes uansett tag-type, så det spiller ingen rolle om det er img, p, textarea, input eller noe annet. Om ønskelig kan det legges til en sjekk på tag-type også.
						if(ev.toElement.childNodes.length > 0) {
							// Det er noe her! Det er ikke plass til elementet!
							allow = false;
						} else {
							// Det er ingenting her. Her er det fritt frem for å slippe elementet!
							allow = true;
						}
					break;
					case 'DragndropOriginalContainer':
						allow = true;
					break;
				}
            }

            function drag(ev) {
				// Iverksett dra-operasjon av elementet.
                ev.dataTransfer.setData("text", ev.target.id);
            }

            function drop(ev) {
                ev.preventDefault();
				
				// Har allowDrop() gitt oss tillatelse til å slippe elementet i beholderen?
				if(allow == false) {
					// Nei.
					return false;
				}
					
				// Ja. Vi eksekverer denne koden for å slippe elementet i beholderen som allowDrop() har gitt oss grønt lys for.
                var data = ev.dataTransfer.getData("text");
                ev.target.appendChild(document.getElementById(data));
				
				// Sett denne til false så allowDrop() har riktig utgangspunkt neste gang det forsøkes å dra et element.
				allow = false;
            }
        
			function resetDragndrop() {
				if(confirm('Er du sikker på at du vil starte på nytt?')) {
					location.reload();
				}
			}
			
			// Denne funksjonen sjekker dine prøveresultater.
			function checkQuizScore() {
				if(confirm('Er du sikker på at du vil sende inn svarene dine?') == false)
					return false;
					
				// Dette arrayet inneholder fasiten på prøven.
				var fasit = ['a3', 'a2', 'a4', 'a1'];
				// Dette arrayet er ment til å inneholde det brukeren sender inn på prøven sin.
				var innsending = [];
				// Antallet spørsmål på testen.
				var antallSporsmal = 4;
				
				// Loop gjennom alle spørsmål for å se hva brukeren har svart på prøven.
				for(sporsmalsnummer = 1; sporsmalsnummer <= antallSporsmal; sporsmalsnummer++) {
					// Her henter vi ut svarfeltet.
					var svarfelt = document.getElementById('q' + sporsmalsnummer);
					
					// Her henter vi ut svaralternativet ved å sjekke om det finnes én childnode i spørsmålscellen til prøven.
					var svaralternativ = svarfelt.childNodes[0];
					
					// Denne if-setningen sjekker om svaralternativet faktisk eksisterer. Er det noe bilde i cellen?
					if(svaralternativ != null) {
						// Det er avgitt et svar. Registrer det i innsendingsoversikten.
						innsending.push(svaralternativ.id);
					} else {
						// Blankt svar er avgitt.
						innsending.push('');
					}
				}
				
				// Definer poengsum. Poengsum starter på 0.
				var poengsum = 0;
				// Definer poengsteg. Hvert riktige svar gir 25 poeng.
				var poengsteg = 25;
				
				var antallRiktige = 0;
				var antallFeil = 0;
				var antallBlanke = 0;
				
				for(sporsmalsnummer = 0; sporsmalsnummer < antallSporsmal; sporsmalsnummer++) {
					// Hvis avgitt svar stemmer overens med fasit så får brukeren poeng.
					if(innsending[sporsmalsnummer] == fasit[sporsmalsnummer]) {
						console.log(innsending[sporsmalsnummer] + ' er det samme som ' + fasit[sporsmalsnummer] + ' og spørsmålsnummeret er ' + sporsmalsnummer);
						// Legg til riktig antall poeng i brukerens foreløpige poengsum.
						poengsum += poengsteg;
						// Registrer at brukeren har avgitt riktig svar.
						antallRiktige++;
	
					} else if(innsending[sporsmalsnummer] == '') {
						// Registrer at brukeren har avgitt blankt svar.
						antallBlanke++;
					} else {
						// Registrer at brukeren har avgitt feil svar.
						antallFeil++;
					}
				}
				
				document.getElementById('resultDiv').innerHTML = '<b>Dine resultater</b><br />Antall riktige:' + antallRiktige + '<br />Antall feil: ' + antallFeil + '<br />Antall blanke: ' + antallBlanke + '<br />Poengsum: ' + poengsum;
				//content.innerHTML =  '<br/><p>Trykk deg videre om du vil fortsette på neste del.</p><br/>' + "<a href='rytmetakt5.html'><img src='pilFrem.png' id='pilFrem'/></a>";
				return antallRiktige;

			}