describe('verify the test cases by tags', function () {

    it('smoke test', { tags: ['@smoke'] }, function () {
        expect(1).to.eql(1)
    })
    it('regression test', { tags: ['@regression'] }, function () {
        expect(1).to.eql(1)
    })
    it('sprint test', { tags: ['@sprint'] }, function () {
        expect(1).to.eql(1)
    })

    it('smoke test and regression test', { tags: ['@smoke', '@regression'] }, function () {
        expect(1).to.eql(1)
    })
    it('smoke test and regression test', { tags: ['@smoke', '@regression'] }, function () {
        expect(1).to.eql(1)
    })
    it('smoke test and regression test', { tags: ['@smoke', '@regression'] }, function () {
        expect(1).to.eql(1)
    })
    it('sprint test and regression test', { tags: ['@sprint', '@regression'] }, function () {
        expect(1).to.eql(1)
    })
    it('smoke and sprint test', { tags: ['@smoke', '@sprint'] }, function () {
        expect(1).to.eql(1)
    })
})