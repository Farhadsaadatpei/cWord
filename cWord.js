/**
 * cWord.js
 * Purpose of this liberary is to create an array that shows the words and frequent usage.
 */
 
class cWord {

    constructor(text){
        this.text = text.split(/\s+/);
        this.result = null;
    }

   /**
    * Count the Words
    * @param {Array} arr 
    */
    count(arr){
        const result = {};
        arr.forEach(function (key) {
            if (result.hasOwnProperty(key)) {
                result[key]++;
            } else {
                result[key] = 1;
            }
        });
        this.result = result;
        return this.result;
    }
    
    /**
     * Get Count
     * @param {Array} exclude 
     */
    
    getCount(exclude){
        return this.count(this.exclude(exclude));
    }

    /**
     * Exlude Words
     * @param {Array} arr 
     */
    exclude(arr){
        return this.text.filter(word => !arr.includes(word));  
    }
}


