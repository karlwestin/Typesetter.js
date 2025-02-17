describe("Typographic replacement", function() {   
    beforeEach(function() {         
        loadFixtures("fixture.html");         
        smallcapsReplacement();        
        this.el = document.getElementById('fixture').innerHTML;   
    });      
    
    describe("Abbreviations", function() {

        it("should add <abbr> around CSS", function(){       
            expect(this.el).toContain("<abbr>css</abbr>");   
        });   

        it("should add <abbr> around ADB–BBDO", function() { 
            expect(this.el).toContain("<abbr>adb-bbdo</abbr>");
        });

        it("should not add <abbr> around ANR-svante", function() { 
            expect(this.el).not.toContain("<abbr>anr-svante</abbr>");
        });

        it("should not add <abbr> around SWORD: (colon on end)", function() { 

            expect(this.el).not.toContain("<abbr>sword:</abbr>"); 
            expect(this.el).not.toContain("<abbr>sword</abbr>");             
        });

    });
    
    it("should add <sup> around ©", function() {        
        expect(this.el).toContain(">©</sup>");   
    });   
    
    it("should add <sup> around ®", function() {        
        expect(this.el).toContain(">®</sup>");   
    });   
    
    it("should change ... to …", function() {        
        expect(this.el).toContain("…");   
    });   
    
    it("should change \" to «", function() {        
        expect(this.el).toContain("«");   
    });   
    
    it("should change fl to ﬂ", function() {        
        expect(this.el).toContain("ﬂ");   
    });      
    
    it("should change fi to ﬁ", function() {        
        expect(this.el).toContain("ﬁ");   
    });   

    it("should change – (space hyphen space) to — (space en-dash space)", function() { 
        expect(this.el).toContain("–");
    });
});
